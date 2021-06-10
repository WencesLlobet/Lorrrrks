# Lorrrrks
Logging, Stubbing, Mocking and Asserting for very stateful javascript manual tests. 
Because live is possibly perfect, but we are kind of blind to its internals.


# Usage
```
$ npm install logomok -g
$ logomok start
````
Figure an assumption/goal on your code.
Change your way to verify it, from:
```
var isRadioButtonOn = true
for (i = 0; i < 3; i++) {
  console.log(isRadioButtonOn)
  setIsRadioButtonOn(isRadioButtonOn)
  isRadioButtonOn = !isRadioButtonOn
}
```
to:
```
var isRadioButtonOn = true
for (i = 0; i < 3; i++) {
     setIsRadioButtonOn(rrrr(isRadioButtonOn))
     isRadioButtonOn = !isRadioButtonOn
}
```

Run your manual steps!

Visit http://localhost:4444/read
You will get:
```
{
    mode:"on-read",
    orderedByExecution: {
                 [{ rrrr:"isRadioButtonOn",    value:true,  pos: 1 },
                  { rrrr:"isRadioButtonOn",    value:false, pos: 2 },
                  { rrrr:"isRadioButtonOn",    value:true,  pos: 3 }]
    }
}
```
Check it's what you expected. Fix if it's needed.

Clean your code before commiting.
```
$ logomok stash radio-button-incredible-feature
````

Will result into:
```
var isRadioButtonOn = true
for (i = 0; i < 3; i++) {
     setIsRadioButtonOn(isRadioButtonOn)
     isRadioButtonOn = !isRadioButtonOn
}
```
review, commit, push, live your live...

...until you need the lorrrrks again

```
$ logomock stash pop radio-button-incredible-feature
```

Resulting into the follwing code (if possible, acording to the Great Incredible Tool merge rules (GIT)): 
```
var isRadioButtonOn = true
for (i = 0; i < 3; i++) {
     setIsRadioButtonOn(rrrr(isRadioButtonOn))
     isRadioButtonOn = !isRadioButtonOn
}
```

# Title says Mocking, Stubbing and Asserting as well...

This will be features to come, something like this may be useful:

Visit http://localhost:4444/edit
You will get an online json editor where you can modify previous json into:
```
{
    orderedByExecution: {
                 [{ mode:"stub",   rrrr:"isRadioButtonOn",    value:false, pos: 1 },    // first call setIsRadioButtonOn will receive a false regardles sisRadioButtonOn
                  { mode:"assert", rrrr:"isRadioButtonOn",    value:false, pos: 2 },    // when input parameter is false an exception is logged/thrown
                  { mode:"mock",   rrrr:"isRadioButtonOn",    value:true,  pos:"3-4", input:undefined}] //when parameter is undefined return true the following 3-4 calls
    }
}
````
