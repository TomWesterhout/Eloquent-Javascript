function rangeCustom(start, end, step) {
  var result = [];
  if (step == null) step = 1;
  
  if (step > 0) {
    for (var i = start; i <= end; i += step)
      result.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      result.push(i);
  }
  return result;
}

rangeCustom(1, 10, 2);

function sumCustom(input) {
  result = 0;
  
  for (var i = 0; i < input.length; i++)
    result += input[i];
  return result;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sumCustom(array);

function reverseArray(input) {
  var result = [];
  for (var i = 0; i <= input.length; i++)
    result.unshift(input[i]);
  return result;
}

reverseArray(array);

function reverseArrayInPlace(input) {
  for (var i = 0; i < Math.floor(input.length / 2); i++) {
    var old = input[i];
    input[i] = input[input.length -1 -i];
    input[input.length -1 -i] = old;
  }
  return input;
}

reverseArrayInPlace(array);

function arrayToList(array) {
  var list = null;
  for (var i = array.length -1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

arrayToList([1, 2, 3]);

var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
  sum += number;
});

function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tabelFor(event, journal));
    }
  }
  return phis;
}

function gatherCorrelations(journal) {
  var phis = {};
  journal.forEach(function(entry) {
    entry.events.forEach(function(event) {
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    });
  });
  return phis;
}

function greatherThan(n) {
  return function(m) { return n > m; };
}

greatherThan(10)(20);

function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

console.log(filter(array, function(person) {
  return person.born > 1900 && person.born < 1925;
}));

function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++) {
    current = combine(current, array[i]);
  }
  return current;
}

exmapleArray = [1, 2, 3, 4, 5];

console.log(reduce(exampleArray, function(a, b) {
  return a + b;
}, 0));

var testArray = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];

console.log(testArray.reduce(function(a, b) {
  return a.concat(b);
}));

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person; 
});

function average(array) {
  return array.reduce(function(a, b) {
    return a + b;
  }) / array.length;
}

average(arrayTest);

var differences = ancestry.filter(function(person) {
  return byName[person.mother] != null;
}).map(function(person) {
  return person.born - byName[person.mother].born;
});

console.log(average(differences));

function groupBy(array, groupOf) {
  var groups = {};
  array.forEach(function(element) {
    var groupName = groupOf(element);
    if (groupName in groups)
      groups[groupName].push(element);
    else
      groups[groupName] = [element];
  });
  return groups;
}

groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
})

function every(array, action) {
  for (var i = 0; i < array.length; i++) {
    if (!action(array[i]))
      return false;
  }
  return true;
}

var testArray = [NaN, NaN, NaN, 4];

console.log(every(testArray, isNaN));

function some(array, action) {
  for (var i = 0; i < array.length; i++) {
    if (action(array[i]))
      return true;
  }
  return false;
}

console.log(some(testArray, isNaN));

TextCell.prototype.minHeight = function() {
  return this.text.length;
}

TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};

function rowHeights(rows) {
  return rows.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    });
  });
}

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);
  
  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }
  
  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo) {
      return drawline(blocks, lineNo);
    }).join("\n");
  }
  
  return rows.map(drawRow).join("\n");
}

function TextCell(text) {
  this.text = text.split("\n");
}

var rows = [];
for (var i = 0; i < 2; i++) {
  var row = [];
  for (var j = 0; j < 2; j++) {
    if ((i + j) % 2 === 0)
      row.push(new TextCell("##"));
    else
      row.push(new TextCell("  "));
  }
  rows.push(row);
}

console.log(drawTable(rows));


