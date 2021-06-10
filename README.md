# Lorrrrks
Logging, stubbing, mocking and asserting for very stateful javascript manual tests. But yes, mainly Logging.

Because live is possibly perfect, but we are kind of blind to the internals.


# Usage
```
$ npm install logomok -g
$ logomok start radio-button-incredible-feature
````
Figure an check you want to do on your code.
Don't do it like this:
```
var isRadioButtonOn = true
for (i = 0; i < 3; i++) {
  console.log(isRadioButtonOn)
  setIsRadioButtonOn(isRadioButtonOn)
  isRadioButtonOn = !isRadioButtonOn
}
```
try:
```
var isRadioButtonOn = true
for (i = 0; i < 3; i++) {
     setIsRadioButtonOn(rrrr(isRadioButtonOn))
     isRadioButtonOn = !isRadioButtonOn
}
```

Run your manual steps!

Open ./.logmock/radio-button-incredible-feature.rrrr
You will see:
```
{
    orderedByExecution: {
                 [{ rrrr:"isRadioButtonOn",    value:true,  pos: 1 },
                  { rrrr:"isRadioButtonOn",    value:false, pos: 2 },
                  { rrrr:"isRadioButtonOn",    value:true,  pos: 3 }]
    }
}
```
Check it's what you expected. Do code needs fixing?

Clean your code before commiting.
```
$ logomok stash
````

Will clean the code resulting into:
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

The code will get the lorrrrks back (only if possible, acording to the Great Incredible Tool merge rules (GIT)): 
```
var isRadioButtonOn = true
for (i = 0; i < 3; i++) {
     setIsRadioButtonOn(rrrr(isRadioButtonOn))
     isRadioButtonOn = !isRadioButtonOn
}
```

# Repo headline says Mocking, Stubbing and Asserting as well...

This could be features to come, something like this may be useful:

Open ./.logmock/radio-button-incredible-feature.rrrr
and add the follwing 'mode' and input attributes
```
{
    orderedByExecution: {
                 [{ mode:"stub",   rrrr:"isRadioButtonOn",    value:false, pos: 1 },    // first call setIsRadioButtonOn will receive a false regardles sisRadioButtonOn
                  { mode:"assert", rrrr:"isRadioButtonOn",    value:false, pos: 2 },    // when input parameter is false an exception is logged/thrown
                  { mode:"mock",   rrrr:"isRadioButtonOn",    value:true,  pos:"3-4", input:undefined}] //when parameter is undefined return true the following 3-4 calls
    }
}
````
Combining the read and the edit mode can result into a manually generated "goldish masterish" tests
