# logomok
Logging, Stubbing, Mocking and Asserting for very stateful javascript manual tests


# Usage

Change:
```
     console.log(isRadioButtonOn)
     setIsRadioButtonOn(isRadioButtonOn)
```
Into:
```
     setIsRadioButtonOn(rrrr(isRadioButtonOn))
```

Run your code (it goes over the upper lines three times with different values)

Visit http://localhost:4444/read
You will get:
```
{
    orderedByExecution: {
                 [{ rrrr:"isRadioButtonOn",    value:true,    time:"2007-11-03T13:18:05", pos: 1 },
                  { rrrr:"isRadioButtonOn",    value:false,   time:"2007-11-03T13:18:05", pos: 2 },
                  { rrrr:"isRadioButtonOn",    value:true,    time:"2007-11-03T13:18:05", pos: 3}]
    }
    orderedByField: {
        isRadioButtonOn: [
                  { time:"2007-11-03T13:18:05", pos: 1, value:true },
                  { time:"2007-11-03T13:18:05", pos: 2, value:false },
                  { time:"2007-11-03T13:18:05", pos: 3, value:true } ]
    }
}
```

