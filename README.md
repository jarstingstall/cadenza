# Cadenza

## API

### chord
The `chord` function is a factory function for creating new `Chord` instances. It takes one argument, the root of the chord. 
```
var chord = require('cadenza').chord;
var myChord = chord('C');
```

### Chord
#### major
```
chord('C').major(); // {root: 'C', third: 'E', fifth: 'G'}
```

#### minor
```
chord('C').minor(); // {root: 'C', third: 'Eb', fifth: 'G'}
```

#### diminished
```
chord('C').diminished(); // {root: 'C', third: 'Eb', fifth: 'Gb'}
```

#### augmented
```
chord('C').augmented(); // {root: 'C', third: 'E', fifth: 'G#'}
```

### interval
The `interval` function is a factory function for creating new `Interval` instances. It takes one argument, the starting note, or bottom note of the interval.
```
var interval = require('cadenza').interval;
var myInterval = interval('C');
```

### Interval
#### majorThird
```
interval('C').majorThird(); // 'E'
```

#### minorThird
```
interval('C').minorThird(); // 'Eb'
```
