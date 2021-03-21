(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $author$project$HelloWorld$elmToJS = _Platform_outgoingPort('elmToJS', $elm$core$Basics$identity);
var $gicentre$elm_vegalite$VegaLite$X = {$: 'X'};
var $gicentre$elm_vegalite$VegaLite$Y = {$: 'Y'};
var $elm$core$Basics$append = _Utils_append;
var $gicentre$elm_vegalite$VegaLite$Column = {$: 'Column'};
var $gicentre$elm_vegalite$VegaLite$arColumn = $gicentre$elm_vegalite$VegaLite$Column;
var $gicentre$elm_vegalite$VegaLite$Row = {$: 'Row'};
var $gicentre$elm_vegalite$VegaLite$arRow = $gicentre$elm_vegalite$VegaLite$Row;
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$add = _Basics_add;
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $gicentre$elm_vegalite$VegaLite$vlPropertyLabel = function (spec) {
	switch (spec.$) {
		case 'VLName':
			return 'name';
		case 'VLDescription':
			return 'description';
		case 'VLTitle':
			return 'title';
		case 'VLWidth':
			return 'width';
		case 'VLWidthStep':
			return 'width';
		case 'VLHeight':
			return 'height';
		case 'VLHeightStep':
			return 'height';
		case 'VLPadding':
			return 'padding';
		case 'VLAutosize':
			return 'autosize';
		case 'VLBackground':
			return 'background';
		case 'VLData':
			return 'data';
		case 'VLDatasets':
			return 'datasets';
		case 'VLProjection':
			return 'projection';
		case 'VLMark':
			return 'mark';
		case 'VLTransform':
			return 'transform';
		case 'VLEncoding':
			return 'encoding';
		case 'VLConfig':
			return 'config';
		case 'VLSelection':
			return 'selection';
		case 'VLConcat':
			return 'concat';
		case 'VLColumns':
			return 'columns';
		case 'VLHConcat':
			return 'hconcat';
		case 'VLVConcat':
			return 'vconcat';
		case 'VLLayer':
			return 'layer';
		case 'VLRepeat':
			return 'repeat';
		case 'VLFacet':
			return 'facet';
		case 'VLSpacing':
			return 'spacing';
		case 'VLAlign':
			return 'align';
		case 'VLBounds':
			return 'bounds';
		case 'VLCenter':
			return 'center';
		case 'VLSpec':
			return 'spec';
		case 'VLResolve':
			return 'resolve';
		default:
			return 'view';
	}
};
var $gicentre$elm_vegalite$VegaLite$asSpec = function (specs) {
	return $elm$json$Json$Encode$object(
		A2(
			$elm$core$List$map,
			function (_v0) {
				var s = _v0.a;
				var v = _v0.b;
				return _Utils_Tuple2(
					$gicentre$elm_vegalite$VegaLite$vlPropertyLabel(s),
					v);
			},
			specs));
};
var $gicentre$elm_vegalite$VegaLite$Bar = {$: 'Bar'};
var $gicentre$elm_vegalite$VegaLite$VLMark = {$: 'VLMark'};
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $gicentre$elm_vegalite$VegaLite$markLabel = function (m) {
	switch (m.$) {
		case 'Arc':
			return 'arc';
		case 'Area':
			return 'area';
		case 'Bar':
			return 'bar';
		case 'Boxplot':
			return 'boxplot';
		case 'Circle':
			return 'circle';
		case 'Errorband':
			return 'errorband';
		case 'Errorbar':
			return 'errorbar';
		case 'Image':
			return 'image';
		case 'Line':
			return 'line';
		case 'Geoshape':
			return 'geoshape';
		case 'Point':
			return 'point';
		case 'Rect':
			return 'rect';
		case 'Rule':
			return 'rule';
		case 'Square':
			return 'square';
		case 'Text':
			return 'text';
		case 'Tick':
			return 'tick';
		default:
			return 'trail';
	}
};
var $gicentre$elm_vegalite$VegaLite$ArAria = function (a) {
	return {$: 'ArAria', a: a};
};
var $gicentre$elm_vegalite$VegaLite$TTNone = {$: 'TTNone'};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$json$Json$Encode$string = _Json_wrap;
var $gicentre$elm_vegalite$VegaLite$ariaProperty = function (arProp) {
	if (arProp.$ === 'ArAria') {
		var b = arProp.a;
		return _Utils_Tuple2(
			'aria',
			$elm$json$Json$Encode$bool(b));
	} else {
		var d = arProp.a;
		return _Utils_Tuple2(
			'description',
			$elm$json$Json$Encode$string(d));
	}
};
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $gicentre$elm_vegalite$VegaLite$blendModeSpec = function (bm) {
	switch (bm.$) {
		case 'BMNormal':
			return $elm$json$Json$Encode$null;
		case 'BMMultiply':
			return $elm$json$Json$Encode$string('multiply');
		case 'BMScreen':
			return $elm$json$Json$Encode$string('screen');
		case 'BMOverlay':
			return $elm$json$Json$Encode$string('overlay');
		case 'BMDarken':
			return $elm$json$Json$Encode$string('darken');
		case 'BMLighten':
			return $elm$json$Json$Encode$string('lighten');
		case 'BMColorDodge':
			return $elm$json$Json$Encode$string('color-dodge');
		case 'BMColorBurn':
			return $elm$json$Json$Encode$string('color-burn');
		case 'BMHardLight':
			return $elm$json$Json$Encode$string('hard-light');
		case 'BMSoftLight':
			return $elm$json$Json$Encode$string('soft-light');
		case 'BMDifference':
			return $elm$json$Json$Encode$string('difference');
		case 'BMExclusion':
			return $elm$json$Json$Encode$string('exclusion');
		case 'BMHue':
			return $elm$json$Json$Encode$string('hue');
		case 'BMSaturation':
			return $elm$json$Json$Encode$string('saturation');
		case 'BMColor':
			return $elm$json$Json$Encode$string('color');
		default:
			return $elm$json$Json$Encode$string('luminosity');
	}
};
var $gicentre$elm_vegalite$VegaLite$colorGradientLabel = function (gr) {
	if (gr.$ === 'GrLinear') {
		return 'linear';
	} else {
		return 'radial';
	}
};
var $gicentre$elm_vegalite$VegaLite$cursorLabel = function (cur) {
	switch (cur.$) {
		case 'CAuto':
			return 'auto';
		case 'CDefault':
			return 'default';
		case 'CNone':
			return 'none';
		case 'CContextMenu':
			return 'context-menu';
		case 'CHelp':
			return 'help';
		case 'CPointer':
			return 'pointer';
		case 'CProgress':
			return 'progress';
		case 'CWait':
			return 'wait';
		case 'CCell':
			return 'cell';
		case 'CCrosshair':
			return 'crosshair';
		case 'CText':
			return 'text';
		case 'CVerticalText':
			return 'vertical-text';
		case 'CAlias':
			return 'alias';
		case 'CCopy':
			return 'copy';
		case 'CMove':
			return 'move';
		case 'CNoDrop':
			return 'no-drop';
		case 'CNotAllowed':
			return 'not-allowed';
		case 'CAllScroll':
			return 'all-scroll';
		case 'CColResize':
			return 'col-resize';
		case 'CRowResize':
			return 'row-resize';
		case 'CNResize':
			return 'n-resize';
		case 'CEResize':
			return 'e-resize';
		case 'CSResize':
			return 's-resize';
		case 'CWResize':
			return 'w-resize';
		case 'CNEResize':
			return 'ne-resize';
		case 'CNWResize':
			return 'nw-resize';
		case 'CSEResize':
			return 'se-resize';
		case 'CSWResize':
			return 'sw-resize';
		case 'CEWResize':
			return 'ew-resize';
		case 'CNSResize':
			return 'ns-resize';
		case 'CNESWResize':
			return 'nesw-resize';
		case 'CNWSEResize':
			return 'nwse-resize';
		case 'CZoomIn':
			return 'zoom-in';
		case 'CZoomOut':
			return 'zoom-out';
		case 'CGrab':
			return 'grab';
		default:
			return 'grabbing';
	}
};
var $elm$json$Json$Encode$float = _Json_wrap;
var $gicentre$elm_vegalite$VegaLite$extentSpec = function (ext) {
	switch (ext.$) {
		case 'ExCI':
			return $elm$json$Json$Encode$string('ci');
		case 'ExStderr':
			return $elm$json$Json$Encode$string('stderr');
		case 'ExStdev':
			return $elm$json$Json$Encode$string('stdev');
		case 'ExIqr':
			return $elm$json$Json$Encode$string('iqr');
		case 'ExRange':
			return $elm$json$Json$Encode$string('min-max');
		default:
			var sc = ext.a;
			return $elm$json$Json$Encode$float(sc);
	}
};
var $gicentre$elm_vegalite$VegaLite$fontWeightSpec = function (w) {
	switch (w.$) {
		case 'Normal':
			return $elm$json$Json$Encode$string('normal');
		case 'Bold':
			return $elm$json$Json$Encode$string('bold');
		case 'Bolder':
			return $elm$json$Json$Encode$string('bolder');
		case 'Lighter':
			return $elm$json$Json$Encode$string('lighter');
		case 'W100':
			return $elm$json$Json$Encode$float(100);
		case 'W200':
			return $elm$json$Json$Encode$float(200);
		case 'W300':
			return $elm$json$Json$Encode$float(300);
		case 'W400':
			return $elm$json$Json$Encode$float(400);
		case 'W500':
			return $elm$json$Json$Encode$float(500);
		case 'W600':
			return $elm$json$Json$Encode$float(600);
		case 'W700':
			return $elm$json$Json$Encode$float(700);
		case 'W800':
			return $elm$json$Json$Encode$float(800);
		default:
			return $elm$json$Json$Encode$float(900);
	}
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $gicentre$elm_vegalite$VegaLite$stopSpec = function (_v0) {
	var x = _v0.a;
	var c = _v0.b;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'offset',
				$elm$json$Json$Encode$float(x)),
				_Utils_Tuple2(
				'color',
				$elm$json$Json$Encode$string(c))
			]));
};
var $gicentre$elm_vegalite$VegaLite$gradientProperty = function (gp) {
	switch (gp.$) {
		case 'GrX1':
			var x = gp.a;
			return _Utils_Tuple2(
				'x1',
				$elm$json$Json$Encode$float(x));
		case 'GrY1':
			var x = gp.a;
			return _Utils_Tuple2(
				'y1',
				$elm$json$Json$Encode$float(x));
		case 'GrX2':
			var x = gp.a;
			return _Utils_Tuple2(
				'x2',
				$elm$json$Json$Encode$float(x));
		case 'GrY2':
			var x = gp.a;
			return _Utils_Tuple2(
				'y2',
				$elm$json$Json$Encode$float(x));
		case 'GrR1':
			var x = gp.a;
			return _Utils_Tuple2(
				'r1',
				$elm$json$Json$Encode$float(x));
		case 'GrR2':
			var x = gp.a;
			return _Utils_Tuple2(
				'r2',
				$elm$json$Json$Encode$float(x));
		default:
			var grs = gp.a;
			return _Utils_Tuple2(
				'stops',
				A2($elm$json$Json$Encode$list, $gicentre$elm_vegalite$VegaLite$stopSpec, grs));
	}
};
var $gicentre$elm_vegalite$VegaLite$hAlignLabel = function (al) {
	switch (al.$) {
		case 'AlignLeft':
			return 'left';
		case 'AlignCenter':
			return 'center';
		default:
			return 'right';
	}
};
var $gicentre$elm_vegalite$VegaLite$markInterpolationLabel = function (interp) {
	switch (interp.$) {
		case 'Linear':
			return 'linear';
		case 'LinearClosed':
			return 'linear-closed';
		case 'Stepwise':
			return 'step';
		case 'StepBefore':
			return 'step-before';
		case 'StepAfter':
			return 'step-after';
		case 'Basis':
			return 'basis';
		case 'BasisOpen':
			return 'basis-open';
		case 'BasisClosed':
			return 'basis-closed';
		case 'Cardinal':
			return 'cardinal';
		case 'CardinalOpen':
			return 'cardinal-open';
		case 'CardinalClosed':
			return 'cardinal-closed';
		case 'Bundle':
			return 'bundle';
		default:
			return 'monotone';
	}
};
var $gicentre$elm_vegalite$VegaLite$markOrientationLabel = function (orient) {
	if (orient.$ === 'MOHorizontal') {
		return 'horizontal';
	} else {
		return 'vertical';
	}
};
var $gicentre$elm_vegalite$VegaLite$multilineTextSpec = function (tText) {
	var _v0 = A2($elm$core$String$split, '\n', tText);
	if (!_v0.b) {
		return $elm$json$Json$Encode$string('');
	} else {
		if (!_v0.b.b) {
			var s = _v0.a;
			return $elm$json$Json$Encode$string(s);
		} else {
			var ss = _v0;
			return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, ss);
		}
	}
};
var $gicentre$elm_vegalite$VegaLite$strokeCapLabel = function (cap) {
	switch (cap.$) {
		case 'CButt':
			return 'butt';
		case 'CRound':
			return 'round';
		default:
			return 'square';
	}
};
var $gicentre$elm_vegalite$VegaLite$strokeJoinLabel = function (jn) {
	switch (jn.$) {
		case 'JMiter':
			return 'miter';
		case 'JRound':
			return 'round';
		default:
			return 'bevel';
	}
};
var $gicentre$elm_vegalite$VegaLite$symbolLabel = function (sym) {
	switch (sym.$) {
		case 'SymCircle':
			return 'circle';
		case 'SymSquare':
			return 'square';
		case 'SymCross':
			return 'cross';
		case 'SymDiamond':
			return 'diamond';
		case 'SymTriangleUp':
			return 'triangle-up';
		case 'SymTriangleDown':
			return 'triangle-down';
		case 'SymTriangleLeft':
			return 'triangle-left';
		case 'SymTriangleRight':
			return 'triangle-right';
		case 'SymTriangle':
			return 'triangle';
		case 'SymStroke':
			return 'stroke';
		case 'SymArrow':
			return 'arrow';
		case 'SymWedge':
			return 'wedge';
		default:
			var svgPath = sym.a;
			return svgPath;
	}
};
var $gicentre$elm_vegalite$VegaLite$textDirectionLabel = function (td) {
	if (td.$ === 'LeftToRight') {
		return 'ltr';
	} else {
		return 'rtl';
	}
};
var $elm$core$String$trim = _String_trim;
var $gicentre$elm_vegalite$VegaLite$ttContentLabel = function (ttContent) {
	switch (ttContent.$) {
		case 'TTEncoding':
			return 'encoding';
		case 'TTData':
			return 'data';
		default:
			return 'null';
	}
};
var $gicentre$elm_vegalite$VegaLite$vAlignLabel = function (al) {
	switch (al.$) {
		case 'AlignTop':
			return 'top';
		case 'AlignLineTop':
			return 'line-top';
		case 'AlignMiddle':
			return 'middle';
		case 'AlignBottom':
			return 'bottom';
		case 'AlignLineBottom':
			return 'line-bottom';
		default:
			return 'alphabetic';
	}
};
var $gicentre$elm_vegalite$VegaLite$lineMarkerSpec = function (pm) {
	if (pm.$ === 'LMNone') {
		return $elm$json$Json$Encode$bool(false);
	} else {
		var mps = pm.a;
		return $elm$json$Json$Encode$object(
			A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps));
	}
};
var $gicentre$elm_vegalite$VegaLite$markProperty = function (mProp) {
	switch (mProp.$) {
		case 'MAria':
			var aps = mProp.a;
			if (!aps.b) {
				return _List_fromArray(
					[
						$gicentre$elm_vegalite$VegaLite$ariaProperty(
						$gicentre$elm_vegalite$VegaLite$ArAria(false))
					]);
			} else {
				return A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$ariaProperty, aps);
			}
		case 'MFilled':
			var b = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'filled',
					$elm$json$Json$Encode$bool(b))
				]);
		case 'MBlend':
			var bm = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'blend',
					$gicentre$elm_vegalite$VegaLite$blendModeSpec(bm))
				]);
		case 'MClip':
			var b = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'clip',
					$elm$json$Json$Encode$bool(b))
				]);
		case 'MColor':
			var col = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'color',
					$elm$json$Json$Encode$string(col))
				]);
		case 'MCornerRadius':
			var r = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadius',
					$elm$json$Json$Encode$float(r))
				]);
		case 'MCornerRadiusEnd':
			var r = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadiusEnd',
					$elm$json$Json$Encode$float(r))
				]);
		case 'MCornerRadiusBL':
			var r = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadiusBottomLeft',
					$elm$json$Json$Encode$float(r))
				]);
		case 'MCornerRadiusBR':
			var r = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadiusBottomRight',
					$elm$json$Json$Encode$float(r))
				]);
		case 'MCornerRadiusTL':
			var r = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadiusTopLeft',
					$elm$json$Json$Encode$float(r))
				]);
		case 'MCornerRadiusTR':
			var r = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadiusTopRight',
					$elm$json$Json$Encode$float(r))
				]);
		case 'MCursor':
			var cur = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cursor',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$cursorLabel(cur)))
				]);
		case 'MExtent':
			var ext = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'extent',
					$gicentre$elm_vegalite$VegaLite$extentSpec(ext))
				]);
		case 'MHRef':
			var s = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'href',
					$elm$json$Json$Encode$string(s))
				]);
		case 'MRemoveInvalid':
			var b = mProp.a;
			return b ? _List_fromArray(
				[
					_Utils_Tuple2(
					'invalid',
					$elm$json$Json$Encode$string('filter'))
				]) : _List_fromArray(
				[
					_Utils_Tuple2('invalid', $elm$json$Json$Encode$null)
				]);
		case 'MFill':
			var col = mProp.a;
			return ($elm$core$String$trim(col) === '') ? _List_fromArray(
				[
					_Utils_Tuple2('fill', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'fill',
					$elm$json$Json$Encode$string(col))
				]);
		case 'MFillGradient':
			var cGrad = mProp.a;
			var props = mProp.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fill',
					$elm$json$Json$Encode$object(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								'gradient',
								$elm$json$Json$Encode$string(
									$gicentre$elm_vegalite$VegaLite$colorGradientLabel(cGrad))),
							A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$gradientProperty, props))))
				]);
		case 'MColorGradient':
			var cGrad = mProp.a;
			var props = mProp.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'color',
					$elm$json$Json$Encode$object(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								'gradient',
								$elm$json$Json$Encode$string(
									$gicentre$elm_vegalite$VegaLite$colorGradientLabel(cGrad))),
							A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$gradientProperty, props))))
				]);
		case 'MStrokeGradient':
			var cGrad = mProp.a;
			var props = mProp.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'stroke',
					$elm$json$Json$Encode$object(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								'gradient',
								$elm$json$Json$Encode$string(
									$gicentre$elm_vegalite$VegaLite$colorGradientLabel(cGrad))),
							A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$gradientProperty, props))))
				]);
		case 'MStroke':
			var col = mProp.a;
			return ($elm$core$String$trim(col) === '') ? _List_fromArray(
				[
					_Utils_Tuple2('stroke', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'stroke',
					$elm$json$Json$Encode$string(col))
				]);
		case 'MStrokeCap':
			var sc = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeCap',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$strokeCapLabel(sc)))
				]);
		case 'MStrokeJoin':
			var sj = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeJoin',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$strokeJoinLabel(sj)))
				]);
		case 'MStrokeMiterLimit':
			var ml = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeMiterLimit',
					$elm$json$Json$Encode$float(ml))
				]);
		case 'MOpacity':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'opacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MFillOpacity':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fillOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MStrokeOpacity':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MStrokeWidth':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MStrokeDash':
			var xs = mProp.a;
			return _Utils_eq(xs, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('strokeDash', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeDash',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs))
				]);
		case 'MStrokeDashOffset':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeDashOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MStyle':
			var styles = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'style',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styles))
				]);
		case 'MInterpolate':
			var interp = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'interpolate',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$markInterpolationLabel(interp)))
				]);
		case 'MTension':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tension',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MOrient':
			var orient = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'orient',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$markOrientationLabel(orient)))
				]);
		case 'MShape':
			var sym = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'shape',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$symbolLabel(sym)))
				]);
		case 'MSize':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'size',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MAngle':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'angle',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MAlign':
			var al = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'align',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(al)))
				]);
		case 'MBaseline':
			var va = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'baseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 'MdX':
			var dx = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'dx',
					$elm$json$Json$Encode$float(dx))
				]);
		case 'MdY':
			var dy = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'dy',
					$elm$json$Json$Encode$float(dy))
				]);
		case 'MFont':
			var fnt = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'font',
					$elm$json$Json$Encode$string(fnt))
				]);
		case 'MFontSize':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fontSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MFontStyle':
			var fSty = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fontStyle',
					$elm$json$Json$Encode$string(fSty))
				]);
		case 'MFontWeight':
			var w = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fontWeight',
					$gicentre$elm_vegalite$VegaLite$fontWeightSpec(w))
				]);
		case 'MRadius':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'radius',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MInnerRadius':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'innerRadius',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MOuterRadius':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'outerRadius',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MText':
			var txt = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'text',
					$gicentre$elm_vegalite$VegaLite$multilineTextSpec(txt))
				]);
		case 'MLineHeight':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'lineHeight',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MLimit':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'limit',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MEllipsis':
			var s = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'ellipsis',
					$elm$json$Json$Encode$string(s))
				]);
		case 'MDir':
			var td = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'dir',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$textDirectionLabel(td)))
				]);
		case 'MTheta':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'theta',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MTheta2':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'theta2',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MThetaOffset':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'thetaOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MTheta2Offset':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'theta2Offset',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MBinSpacing':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'binSpacing',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MContinuousBandSize':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'continuousBandSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MDiscreteBandSize':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'discreteBandSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MShortTimeLabels':
			var b = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'shortTimeLabels',
					$elm$json$Json$Encode$bool(b))
				]);
		case 'MBandSize':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'bandSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MThickness':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'thickness',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MRule':
			var props = mProp.a;
			if (!props.b) {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'rule',
						$elm$json$Json$Encode$bool(false))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'rule',
						$elm$json$Json$Encode$object(
							A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, props)))
					]);
			}
		case 'MBorders':
			var props = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'borders',
					$elm$json$Json$Encode$object(
						A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, props)))
				]);
		case 'MMedian':
			var props = mProp.a;
			if (!props.b) {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'median',
						$elm$json$Json$Encode$bool(false))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'median',
						$elm$json$Json$Encode$object(
							A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, props)))
					]);
			}
		case 'MBox':
			var props = mProp.a;
			if (!props.b) {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'box',
						$elm$json$Json$Encode$bool(false))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'box',
						$elm$json$Json$Encode$object(
							A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, props)))
					]);
			}
		case 'MOutliers':
			var props = mProp.a;
			if (!props.b) {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'outliers',
						$elm$json$Json$Encode$bool(false))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'outliers',
						$elm$json$Json$Encode$object(
							A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, props)))
					]);
			}
		case 'MTicks':
			var props = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'ticks',
					$elm$json$Json$Encode$object(
						A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, props)))
				]);
		case 'MTooltip':
			var ttContent = mProp.a;
			return _Utils_eq(ttContent, $gicentre$elm_vegalite$VegaLite$TTNone) ? _List_fromArray(
				[
					_Utils_Tuple2('tooltip', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'tooltip',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'content',
								$elm$json$Json$Encode$string(
									$gicentre$elm_vegalite$VegaLite$ttContentLabel(ttContent)))
							])))
				]);
		case 'MPoint':
			var pm = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'point',
					$gicentre$elm_vegalite$VegaLite$pointMarkerSpec(pm))
				]);
		case 'MLine':
			var lm = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'line',
					$gicentre$elm_vegalite$VegaLite$lineMarkerSpec(lm))
				]);
		case 'MWidth':
			var w = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'width',
					$elm$json$Json$Encode$float(w))
				]);
		case 'MHeight':
			var h = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'height',
					$elm$json$Json$Encode$float(h))
				]);
		case 'MX':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'x',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MY':
			var y = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'y',
					$elm$json$Json$Encode$float(y))
				]);
		case 'MX2':
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'x2',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MY2':
			var y = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'y2',
					$elm$json$Json$Encode$float(y))
				]);
		case 'MOrder':
			var b = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'order',
					$elm$json$Json$Encode$bool(b))
				]);
		case 'MXOffset':
			var o = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'xOffset',
					$elm$json$Json$Encode$float(o))
				]);
		case 'MX2Offset':
			var o = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'x2Offset',
					$elm$json$Json$Encode$float(o))
				]);
		case 'MYOffset':
			var o = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'yOffset',
					$elm$json$Json$Encode$float(o))
				]);
		case 'MY2Offset':
			var o = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'y2Offset',
					$elm$json$Json$Encode$float(o))
				]);
		case 'MRadiusOffset':
			var o = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'radiusOffset',
					$elm$json$Json$Encode$float(o))
				]);
		case 'MRadius2Offset':
			var o = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'radius2Offset',
					$elm$json$Json$Encode$float(o))
				]);
		default:
			var b = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'aspect',
					$elm$json$Json$Encode$bool(b))
				]);
	}
};
var $gicentre$elm_vegalite$VegaLite$pointMarkerSpec = function (pm) {
	switch (pm.$) {
		case 'PMTransparent':
			return $elm$json$Json$Encode$string('transparent');
		case 'PMNone':
			return $elm$json$Json$Encode$bool(false);
		default:
			var mps = pm.a;
			return _Utils_eq(mps, _List_Nil) ? $elm$json$Json$Encode$bool(true) : $elm$json$Json$Encode$object(
				A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps));
	}
};
var $gicentre$elm_vegalite$VegaLite$mark = F2(
	function (m, mProps) {
		if (!mProps.b) {
			return _Utils_Tuple2(
				$gicentre$elm_vegalite$VegaLite$VLMark,
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$markLabel(m)));
		} else {
			return _Utils_Tuple2(
				$gicentre$elm_vegalite$VegaLite$VLMark,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'type',
							$elm$json$Json$Encode$string(
								$gicentre$elm_vegalite$VegaLite$markLabel(m))),
						A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mProps))));
		}
	});
var $gicentre$elm_vegalite$VegaLite$bar = $gicentre$elm_vegalite$VegaLite$mark($gicentre$elm_vegalite$VegaLite$Bar);
var $gicentre$elm_vegalite$VegaLite$DStrings = function (a) {
	return {$: 'DStrings', a: a};
};
var $gicentre$elm_vegalite$VegaLite$RStrings = function (a) {
	return {$: 'RStrings', a: a};
};
var $gicentre$elm_vegalite$VegaLite$SDomain = function (a) {
	return {$: 'SDomain', a: a};
};
var $gicentre$elm_vegalite$VegaLite$SRange = function (a) {
	return {$: 'SRange', a: a};
};
var $elm$core$List$unzip = function (pairs) {
	var step = F2(
		function (_v0, _v1) {
			var x = _v0.a;
			var y = _v0.b;
			var xs = _v1.a;
			var ys = _v1.b;
			return _Utils_Tuple2(
				A2($elm$core$List$cons, x, xs),
				A2($elm$core$List$cons, y, ys));
		});
	return A3(
		$elm$core$List$foldr,
		step,
		_Utils_Tuple2(_List_Nil, _List_Nil),
		pairs);
};
var $gicentre$elm_vegalite$VegaLite$categoricalDomainMap = function (scaleDomainPairs) {
	var _v0 = $elm$core$List$unzip(scaleDomainPairs);
	var domain = _v0.a;
	var range = _v0.b;
	return _List_fromArray(
		[
			$gicentre$elm_vegalite$VegaLite$SDomain(
			$gicentre$elm_vegalite$VegaLite$DStrings(domain)),
			$gicentre$elm_vegalite$VegaLite$SRange(
			$gicentre$elm_vegalite$VegaLite$RStrings(range))
		]);
};
var $gicentre$elm_vegalite$VegaLite$ColumnFields = function (a) {
	return {$: 'ColumnFields', a: a};
};
var $gicentre$elm_vegalite$VegaLite$columnFields = $gicentre$elm_vegalite$VegaLite$ColumnFields;
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $gicentre$elm_vegalite$VegaLite$VLData = {$: 'VLData'};
var $gicentre$elm_vegalite$VegaLite$dataTypeLabel = function (dType) {
	switch (dType.$) {
		case 'FoNum':
			return 'number';
		case 'FoBoo':
			return 'boolean';
		case 'FoDate':
			var dateFmt = dType.a;
			return (dateFmt === '') ? 'date' : ('date:\'' + (dateFmt + '\''));
		default:
			var dateFmt = dType.a;
			return (dateFmt === '') ? 'utc' : ('utc:\'' + (dateFmt + '\''));
	}
};
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $gicentre$elm_vegalite$VegaLite$formatProperties = function (fmt) {
	switch (fmt.$) {
		case 'JSON':
			var propertyName = fmt.a;
			return ($elm$core$String$trim(propertyName) === '') ? _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('json'))
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('json')),
					_Utils_Tuple2(
					'property',
					$elm$json$Json$Encode$string(propertyName))
				]);
		case 'CSV':
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('csv'))
				]);
		case 'TSV':
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('tsv'))
				]);
		case 'DSV':
			var delim = fmt.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('dsv')),
					_Utils_Tuple2(
					'delimiter',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromChar(delim)))
				]);
		case 'Arrow':
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('arrow'))
				]);
		case 'TopojsonFeature':
			var objectSet = fmt.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('topojson')),
					_Utils_Tuple2(
					'feature',
					$elm$json$Json$Encode$string(objectSet))
				]);
		case 'TopojsonMesh':
			var objectSet = fmt.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('topojson')),
					_Utils_Tuple2(
					'mesh',
					$elm$json$Json$Encode$string(objectSet))
				]);
		default:
			var fmts = fmt.a;
			return _Utils_eq(fmts, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('parse', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'parse',
					$elm$json$Json$Encode$object(
						A2(
							$elm$core$List$map,
							function (_v1) {
								var field = _v1.a;
								var fFormat = _v1.b;
								return _Utils_Tuple2(
									field,
									$elm$json$Json$Encode$string(
										$gicentre$elm_vegalite$VegaLite$dataTypeLabel(fFormat)));
							},
							fmts)))
				]);
	}
};
var $gicentre$elm_vegalite$VegaLite$dataFromUrl = F2(
	function (u, fmts) {
		return _Utils_eq(fmts, _List_Nil) ? _Utils_Tuple2(
			$gicentre$elm_vegalite$VegaLite$VLData,
			$elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'url',
						$elm$json$Json$Encode$string(u))
					]))) : _Utils_Tuple2(
			$gicentre$elm_vegalite$VegaLite$VLData,
			$elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'url',
						$elm$json$Json$Encode$string(u)),
						_Utils_Tuple2(
						'format',
						$elm$json$Json$Encode$object(
							A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$formatProperties, fmts)))
					])));
	});
var $gicentre$elm_vegalite$VegaLite$VLEncoding = {$: 'VLEncoding'};
var $gicentre$elm_vegalite$VegaLite$encoding = function (channels) {
	return _Utils_Tuple2(
		$gicentre$elm_vegalite$VegaLite$VLEncoding,
		$elm$json$Json$Encode$object(channels));
};
var $gicentre$elm_vegalite$VegaLite$Month = {$: 'Month'};
var $gicentre$elm_vegalite$VegaLite$month = $gicentre$elm_vegalite$VegaLite$Month;
var $gicentre$elm_vegalite$VegaLite$Count = {$: 'Count'};
var $gicentre$elm_vegalite$VegaLite$opCount = $gicentre$elm_vegalite$VegaLite$Count;
var $gicentre$elm_vegalite$VegaLite$Mean = {$: 'Mean'};
var $gicentre$elm_vegalite$VegaLite$opMean = $gicentre$elm_vegalite$VegaLite$Mean;
var $gicentre$elm_vegalite$VegaLite$PAggregate = function (a) {
	return {$: 'PAggregate', a: a};
};
var $gicentre$elm_vegalite$VegaLite$pAggregate = $gicentre$elm_vegalite$VegaLite$PAggregate;
var $gicentre$elm_vegalite$VegaLite$PName = function (a) {
	return {$: 'PName', a: a};
};
var $gicentre$elm_vegalite$VegaLite$pName = $gicentre$elm_vegalite$VegaLite$PName;
var $gicentre$elm_vegalite$VegaLite$Ordinal = {$: 'Ordinal'};
var $gicentre$elm_vegalite$VegaLite$PmType = function (a) {
	return {$: 'PmType', a: a};
};
var $gicentre$elm_vegalite$VegaLite$pOrdinal = $gicentre$elm_vegalite$VegaLite$PmType($gicentre$elm_vegalite$VegaLite$Ordinal);
var $gicentre$elm_vegalite$VegaLite$Quantitative = {$: 'Quantitative'};
var $gicentre$elm_vegalite$VegaLite$pQuant = $gicentre$elm_vegalite$VegaLite$PmType($gicentre$elm_vegalite$VegaLite$Quantitative);
var $gicentre$elm_vegalite$VegaLite$PRepeat = function (a) {
	return {$: 'PRepeat', a: a};
};
var $gicentre$elm_vegalite$VegaLite$pRepeat = $gicentre$elm_vegalite$VegaLite$PRepeat;
var $gicentre$elm_vegalite$VegaLite$PTimeUnit = function (a) {
	return {$: 'PTimeUnit', a: a};
};
var $gicentre$elm_vegalite$VegaLite$pTimeUnit = $gicentre$elm_vegalite$VegaLite$PTimeUnit;
var $gicentre$elm_vegalite$VegaLite$Point = {$: 'Point'};
var $gicentre$elm_vegalite$VegaLite$point = $gicentre$elm_vegalite$VegaLite$mark($gicentre$elm_vegalite$VegaLite$Point);
var $gicentre$elm_vegalite$VegaLite$arrangementLabel = function (arrng) {
	switch (arrng.$) {
		case 'Row':
			return 'row';
		case 'Column':
			return 'column';
		case 'Flow':
			return 'repeat';
		default:
			return 'layer';
	}
};
var $gicentre$elm_vegalite$VegaLite$AxGridColor = function (a) {
	return {$: 'AxGridColor', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxGridDash = function (a) {
	return {$: 'AxGridDash', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxGridDashOffset = function (a) {
	return {$: 'AxGridDashOffset', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxGridOpacity = function (a) {
	return {$: 'AxGridOpacity', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxGridWidth = function (a) {
	return {$: 'AxGridWidth', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelAlign = function (a) {
	return {$: 'AxLabelAlign', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelBaseline = function (a) {
	return {$: 'AxLabelBaseline', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelColor = function (a) {
	return {$: 'AxLabelColor', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelFont = function (a) {
	return {$: 'AxLabelFont', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelFontSize = function (a) {
	return {$: 'AxLabelFontSize', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelFontStyle = function (a) {
	return {$: 'AxLabelFontStyle', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelFontWeight = function (a) {
	return {$: 'AxLabelFontWeight', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelOffset = function (a) {
	return {$: 'AxLabelOffset', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelOpacity = function (a) {
	return {$: 'AxLabelOpacity', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelPadding = function (a) {
	return {$: 'AxLabelPadding', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxTickColor = function (a) {
	return {$: 'AxTickColor', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxTickDash = function (a) {
	return {$: 'AxTickDash', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxTickDashOffset = function (a) {
	return {$: 'AxTickDashOffset', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxTickOpacity = function (a) {
	return {$: 'AxTickOpacity', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxTickSize = function (a) {
	return {$: 'AxTickSize', a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxTickWidth = function (a) {
	return {$: 'AxTickWidth', a: a};
};
var $gicentre$elm_vegalite$VegaLite$anchorLabel = function (an) {
	switch (an.$) {
		case 'AnStart':
			return 'start';
		case 'AnMiddle':
			return 'middle';
		default:
			return 'end';
	}
};
var $elm$json$Json$Encode$int = _Json_wrap;
var $gicentre$elm_vegalite$VegaLite$binProperty = function (binProp) {
	switch (binProp.$) {
		case 'MaxBins':
			var n = binProp.a;
			return _Utils_Tuple2(
				'maxbins',
				$elm$json$Json$Encode$int(n));
		case 'BiAnchor':
			var x = binProp.a;
			return _Utils_Tuple2(
				'anchor',
				$elm$json$Json$Encode$float(x));
		case 'Base':
			var x = binProp.a;
			return _Utils_Tuple2(
				'base',
				$elm$json$Json$Encode$float(x));
		case 'Step':
			var x = binProp.a;
			return _Utils_Tuple2(
				'step',
				$elm$json$Json$Encode$float(x));
		case 'Steps':
			var xs = binProp.a;
			return _Utils_Tuple2(
				'steps',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs));
		case 'MinStep':
			var x = binProp.a;
			return _Utils_Tuple2(
				'minstep',
				$elm$json$Json$Encode$float(x));
		case 'Divides':
			var xs = binProp.a;
			return _Utils_Tuple2(
				'divide',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs));
		case 'Extent':
			var mn = binProp.a;
			var mx = binProp.b;
			return _Utils_Tuple2(
				'extent',
				A2(
					$elm$json$Json$Encode$list,
					$elm$json$Json$Encode$float,
					_List_fromArray(
						[mn, mx])));
		case 'SelectionExtent':
			var s = binProp.a;
			return _Utils_Tuple2(
				'extent',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'selection',
							$elm$json$Json$Encode$string(s))
						])));
		default:
			var b = binProp.a;
			return _Utils_Tuple2(
				'nice',
				$elm$json$Json$Encode$bool(b));
	}
};
var $gicentre$elm_vegalite$VegaLite$bin = function (bProps) {
	return _Utils_eq(bProps, _List_Nil) ? _Utils_Tuple2(
		'bin',
		$elm$json$Json$Encode$bool(true)) : _Utils_Tuple2(
		'bin',
		$elm$json$Json$Encode$object(
			A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$binProperty, bProps)));
};
var $gicentre$elm_vegalite$VegaLite$dayLabel = function (dayName) {
	switch (dayName.$) {
		case 'Mon':
			return 'Mon';
		case 'Tue':
			return 'Tue';
		case 'Wed':
			return 'Wed';
		case 'Thu':
			return 'Thu';
		case 'Fri':
			return 'Fri';
		case 'Sat':
			return 'Sat';
		default:
			return 'Sun';
	}
};
var $gicentre$elm_vegalite$VegaLite$monthNameLabel = function (mon) {
	switch (mon.$) {
		case 'Jan':
			return 'Jan';
		case 'Feb':
			return 'Feb';
		case 'Mar':
			return 'Mar';
		case 'Apr':
			return 'Apr';
		case 'May':
			return 'May';
		case 'Jun':
			return 'Jun';
		case 'Jul':
			return 'Jul';
		case 'Aug':
			return 'Aug';
		case 'Sep':
			return 'Sep';
		case 'Oct':
			return 'Oct';
		case 'Nov':
			return 'Nov';
		default:
			return 'Dec';
	}
};
var $gicentre$elm_vegalite$VegaLite$dateTimeProperty = function (dtp) {
	switch (dtp.$) {
		case 'DTYear':
			var y = dtp.a;
			return _Utils_Tuple2(
				'year',
				$elm$json$Json$Encode$int(y));
		case 'DTQuarter':
			var q = dtp.a;
			return _Utils_Tuple2(
				'quarter',
				$elm$json$Json$Encode$int(q));
		case 'DTMonth':
			var mon = dtp.a;
			return _Utils_Tuple2(
				'month',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$monthNameLabel(mon)));
		case 'DTMonthNum':
			var n = dtp.a;
			return _Utils_Tuple2(
				'month',
				$elm$json$Json$Encode$int(n));
		case 'DTDate':
			var d = dtp.a;
			return _Utils_Tuple2(
				'date',
				$elm$json$Json$Encode$int(d));
		case 'DTDay':
			var d = dtp.a;
			return _Utils_Tuple2(
				'day',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$dayLabel(d)));
		case 'DTHours':
			var h = dtp.a;
			return _Utils_Tuple2(
				'hours',
				$elm$json$Json$Encode$int(h));
		case 'DTMinutes':
			var m = dtp.a;
			return _Utils_Tuple2(
				'minutes',
				$elm$json$Json$Encode$int(m));
		case 'DTSeconds':
			var s = dtp.a;
			return _Utils_Tuple2(
				'seconds',
				$elm$json$Json$Encode$int(s));
		default:
			var ms = dtp.a;
			return _Utils_Tuple2(
				'milliseconds',
				$elm$json$Json$Encode$int(ms));
	}
};
var $gicentre$elm_vegalite$VegaLite$dataValueSpec = function (val) {
	switch (val.$) {
		case 'Number':
			var x = val.a;
			return $elm$json$Json$Encode$float(x);
		case 'Str':
			var s = val.a;
			return $elm$json$Json$Encode$string(s);
		case 'Boolean':
			var b = val.a;
			return $elm$json$Json$Encode$bool(b);
		case 'DateTime':
			var d = val.a;
			return $elm$json$Json$Encode$object(
				A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d));
		default:
			return $elm$json$Json$Encode$null;
	}
};
var $gicentre$elm_vegalite$VegaLite$dataValuesSpecs = function (dvs) {
	switch (dvs.$) {
		case 'Numbers':
			var xs = dvs.a;
			return A2($elm$core$List$map, $elm$json$Json$Encode$float, xs);
		case 'Strings':
			var ss = dvs.a;
			return A2($elm$core$List$map, $elm$json$Json$Encode$string, ss);
		case 'DateTimes':
			var dtss = dvs.a;
			return A2(
				$elm$core$List$map,
				function (ds) {
					return $elm$json$Json$Encode$object(
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, ds));
				},
				dtss);
		default:
			var bs = dvs.a;
			return A2($elm$core$List$map, $elm$json$Json$Encode$bool, bs);
	}
};
var $gicentre$elm_vegalite$VegaLite$toList = $elm$json$Json$Encode$list($elm$core$Basics$identity);
var $gicentre$elm_vegalite$VegaLite$filterProperties = function (f) {
	switch (f.$) {
		case 'FEqual':
			var field = f.a;
			var val = f.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(field)),
					_Utils_Tuple2(
					'equal',
					$gicentre$elm_vegalite$VegaLite$dataValueSpec(val))
				]);
		case 'FLessThan':
			var field = f.a;
			var val = f.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(field)),
					_Utils_Tuple2(
					'lt',
					$gicentre$elm_vegalite$VegaLite$dataValueSpec(val))
				]);
		case 'FLessThanEq':
			var field = f.a;
			var val = f.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(field)),
					_Utils_Tuple2(
					'lte',
					$gicentre$elm_vegalite$VegaLite$dataValueSpec(val))
				]);
		case 'FGreaterThan':
			var field = f.a;
			var val = f.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(field)),
					_Utils_Tuple2(
					'gt',
					$gicentre$elm_vegalite$VegaLite$dataValueSpec(val))
				]);
		case 'FGreaterThanEq':
			var field = f.a;
			var val = f.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(field)),
					_Utils_Tuple2(
					'gte',
					$gicentre$elm_vegalite$VegaLite$dataValueSpec(val))
				]);
		case 'FSelection':
			var selName = f.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'selection',
					$elm$json$Json$Encode$string(selName))
				]);
		case 'FRange':
			var field = f.a;
			var vals = f.b;
			var values = function () {
				if (vals.$ === 'NumberRange') {
					var mn = vals.a;
					var mx = vals.b;
					return A2(
						$elm$json$Json$Encode$list,
						$elm$json$Json$Encode$float,
						_List_fromArray(
							[mn, mx]));
				} else {
					if (!vals.a.b) {
						if (!vals.b.b) {
							return $gicentre$elm_vegalite$VegaLite$toList(
								_List_fromArray(
									[$elm$json$Json$Encode$null, $elm$json$Json$Encode$null]));
						} else {
							var dMax = vals.b;
							return $gicentre$elm_vegalite$VegaLite$toList(
								_List_fromArray(
									[
										$elm$json$Json$Encode$null,
										$elm$json$Json$Encode$object(
										A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, dMax))
									]));
						}
					} else {
						if (!vals.b.b) {
							var dMin = vals.a;
							return $gicentre$elm_vegalite$VegaLite$toList(
								_List_fromArray(
									[
										$elm$json$Json$Encode$object(
										A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, dMin)),
										$elm$json$Json$Encode$null
									]));
						} else {
							var dMin = vals.a;
							var dMax = vals.b;
							return A2(
								$elm$json$Json$Encode$list,
								$elm$json$Json$Encode$object,
								_List_fromArray(
									[
										A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, dMin),
										A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, dMax)
									]));
						}
					}
				}
			}();
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(field)),
					_Utils_Tuple2('range', values)
				]);
		case 'FOneOf':
			var field = f.a;
			var vals = f.b;
			var values = function () {
				switch (vals.$) {
					case 'Numbers':
						var xs = vals.a;
						return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs);
					case 'DateTimes':
						var ds = vals.a;
						return A2(
							$elm$json$Json$Encode$list,
							function (d) {
								return $elm$json$Json$Encode$object(
									A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d));
							},
							ds);
					case 'Strings':
						var ss = vals.a;
						return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, ss);
					default:
						var bs = vals.a;
						return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$bool, bs);
				}
			}();
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(field)),
					_Utils_Tuple2('oneOf', values)
				]);
		case 'FValid':
			var field = f.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(field)),
					_Utils_Tuple2(
					'valid',
					$elm$json$Json$Encode$bool(true))
				]);
		default:
			return _List_Nil;
	}
};
var $gicentre$elm_vegalite$VegaLite$compositionAlignmentLabel = function (ca) {
	switch (ca.$) {
		case 'CANone':
			return 'none';
		case 'CAEach':
			return 'each';
		default:
			return 'all';
	}
};
var $gicentre$elm_vegalite$VegaLite$legendOrientLabel = function (orient) {
	switch (orient.$) {
		case 'Left':
			return 'left';
		case 'TopLeft':
			return 'top-left';
		case 'Top':
			return 'top';
		case 'TopRight':
			return 'top-right';
		case 'Right':
			return 'right';
		case 'BottomRight':
			return 'bottom-right';
		case 'Bottom':
			return 'bottom';
		case 'BottomLeft':
			return 'bottom-left';
		default:
			return 'none';
	}
};
var $gicentre$elm_vegalite$VegaLite$overlapStrategySpec = function (strat) {
	switch (strat.$) {
		case 'ONone':
			return $elm$json$Json$Encode$bool(false);
		case 'OParity':
			return $elm$json$Json$Encode$string('parity');
		default:
			return $elm$json$Json$Encode$string('greedy');
	}
};
var $gicentre$elm_vegalite$VegaLite$legendProperty = function (legendProp) {
	switch (legendProp.$) {
		case 'LAria':
			var aps = legendProp.a;
			if (!aps.b) {
				return _List_fromArray(
					[
						$gicentre$elm_vegalite$VegaLite$ariaProperty(
						$gicentre$elm_vegalite$VegaLite$ArAria(false))
					]);
			} else {
				return A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$ariaProperty, aps);
			}
		case 'LClipHeight':
			var h = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'clipHeight',
					$elm$json$Json$Encode$float(h))
				]);
		case 'LColumnPadding':
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'columnPadding',
					$elm$json$Json$Encode$float(n))
				]);
		case 'LRowPadding':
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'rowPadding',
					$elm$json$Json$Encode$float(n))
				]);
		case 'LColumns':
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'columns',
					$elm$json$Json$Encode$float(n))
				]);
		case 'LCornerRadius':
			var r = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadius',
					$elm$json$Json$Encode$float(r))
				]);
		case 'LFillColor':
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fillColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 'LDirection':
			var d = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'direction',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$markOrientationLabel(d)))
				]);
		case 'LType':
			var lType = legendProp.a;
			if (lType.$ === 'Gradient') {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('gradient'))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('symbol'))
					]);
			}
		case 'LFormat':
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'format',
					$elm$json$Json$Encode$string(s))
				]);
		case 'LFormatAsNum':
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'formatType',
					$elm$json$Json$Encode$string('number'))
				]);
		case 'LFormatAsTemporal':
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'formatType',
					$elm$json$Json$Encode$string('time'))
				]);
		case 'LFormatAsCustom':
			var formatter = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'formatType',
					$elm$json$Json$Encode$string(formatter))
				]);
		case 'LGradientLength':
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientLength',
					$elm$json$Json$Encode$float(n))
				]);
		case 'LGradientThickness':
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientThickness',
					$elm$json$Json$Encode$float(n))
				]);
		case 'LGradientStrokeColor':
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientStrokeColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 'LGradientStrokeWidth':
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientStrokeWidth',
					$elm$json$Json$Encode$float(n))
				]);
		case 'LGridAlign':
			var ga = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$compositionAlignmentLabel(ga)))
				]);
		case 'LLabelAlign':
			var ha = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(ha)))
				]);
		case 'LLabelBaseline':
			var va = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelBaseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 'LLabelColor':
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 'LLabelFont':
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFont',
					$elm$json$Json$Encode$string(s))
				]);
		case 'LLabelFontSize':
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFontSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 'LLabelLimit':
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelLimit',
					$elm$json$Json$Encode$float(x))
				]);
		case 'LLabelOffset':
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 'LLabelOverlap':
			var lo = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOverlap',
					$gicentre$elm_vegalite$VegaLite$overlapStrategySpec(lo))
				]);
		case 'LOffset':
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'offset',
					$elm$json$Json$Encode$float(x))
				]);
		case 'LOrient':
			var orient = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'orient',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$legendOrientLabel(orient)))
				]);
		case 'LPadding':
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'padding',
					$elm$json$Json$Encode$float(x))
				]);
		case 'LStrokeColor':
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 'LStrokeWidth':
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 'LSymbolFillColor':
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolFillColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 'LSymbolLimit':
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolLimit',
					$elm$json$Json$Encode$int(n))
				]);
		case 'LSymbolStrokeColor':
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolStrokeColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 'LSymbolType':
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolType',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$symbolLabel(s)))
				]);
		case 'LSymbolSize':
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 'LSymbolStrokeWidth':
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolStrokeWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 'LTickCount':
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickCount',
					$elm$json$Json$Encode$float(x))
				]);
		case 'LTitle':
			var s = legendProp.a;
			return (s === '') ? _List_fromArray(
				[
					_Utils_Tuple2('title', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'title',
					$gicentre$elm_vegalite$VegaLite$multilineTextSpec(s))
				]);
		case 'LTitleAlign':
			var ha = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(ha)))
				]);
		case 'LTitleBaseline':
			var va = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleBaseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 'LTitleColor':
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 'LTitleFont':
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFont',
					$elm$json$Json$Encode$string(s))
				]);
		case 'LTitleFontSize':
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 'LTitleFontWeight':
			var fw = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontWeight',
					$gicentre$elm_vegalite$VegaLite$fontWeightSpec(fw))
				]);
		case 'LTitleLimit':
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleLimit',
					$elm$json$Json$Encode$float(x))
				]);
		case 'LTitleOrient':
			var orient = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleOrient',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$legendOrientLabel(orient)))
				]);
		case 'LTitlePadding':
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titlePadding',
					$elm$json$Json$Encode$float(x))
				]);
		case 'LValues':
			var vals = legendProp.a;
			var list = function () {
				switch (vals.$) {
					case 'LNumbers':
						var xs = vals.a;
						return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs);
					case 'LDateTimes':
						var ds = vals.a;
						return A2(
							$elm$json$Json$Encode$list,
							function (d) {
								return $elm$json$Json$Encode$object(
									A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d));
							},
							ds);
					default:
						var ss = vals.a;
						return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, ss);
				}
			}();
			return _List_fromArray(
				[
					_Utils_Tuple2('values', list)
				]);
		case 'LeX':
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'legendX',
					$elm$json$Json$Encode$float(n))
				]);
		case 'LeY':
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'legendY',
					$elm$json$Json$Encode$float(n))
				]);
		default:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'zindex',
					$elm$json$Json$Encode$int(n))
				]);
	}
};
var $gicentre$elm_vegalite$VegaLite$measurementLabel = function (mType) {
	switch (mType.$) {
		case 'Nominal':
			return 'nominal';
		case 'Ordinal':
			return 'ordinal';
		case 'Quantitative':
			return 'quantitative';
		case 'Temporal':
			return 'temporal';
		default:
			return 'geojson';
	}
};
var $elm$core$String$length = _String_length;
var $gicentre$elm_vegalite$VegaLite$operationSpec = function (op) {
	switch (op.$) {
		case 'ArgMax':
			var maybeField = op.a;
			if (maybeField.$ === 'Nothing') {
				return $elm$json$Json$Encode$string('argmax');
			} else {
				var f = maybeField.a;
				return (!$elm$core$String$length(
					$elm$core$String$trim(f))) ? $elm$json$Json$Encode$string('argmax') : $elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'argmax',
							$elm$json$Json$Encode$string(f))
						]));
			}
		case 'ArgMin':
			var maybeField = op.a;
			if (maybeField.$ === 'Nothing') {
				return $elm$json$Json$Encode$string('argmin');
			} else {
				var f = maybeField.a;
				return (!$elm$core$String$length(
					$elm$core$String$trim(f))) ? $elm$json$Json$Encode$string('argmin') : $elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'argmin',
							$elm$json$Json$Encode$string(f))
						]));
			}
		case 'Count':
			return $elm$json$Json$Encode$string('count');
		case 'CI0':
			return $elm$json$Json$Encode$string('ci0');
		case 'CI1':
			return $elm$json$Json$Encode$string('ci1');
		case 'Distinct':
			return $elm$json$Json$Encode$string('distinct');
		case 'Max':
			return $elm$json$Json$Encode$string('max');
		case 'Mean':
			return $elm$json$Json$Encode$string('mean');
		case 'Median':
			return $elm$json$Json$Encode$string('median');
		case 'Min':
			return $elm$json$Json$Encode$string('min');
		case 'Missing':
			return $elm$json$Json$Encode$string('missing');
		case 'Product':
			return $elm$json$Json$Encode$string('product');
		case 'Q1':
			return $elm$json$Json$Encode$string('q1');
		case 'Q3':
			return $elm$json$Json$Encode$string('q3');
		case 'Stdev':
			return $elm$json$Json$Encode$string('stdev');
		case 'StdevP':
			return $elm$json$Json$Encode$string('stdevp');
		case 'Sum':
			return $elm$json$Json$Encode$string('sum');
		case 'Stderr':
			return $elm$json$Json$Encode$string('stderr');
		case 'Valid':
			return $elm$json$Json$Encode$string('valid');
		case 'Variance':
			return $elm$json$Json$Encode$string('variance');
		default:
			return $elm$json$Json$Encode$string('variancep');
	}
};
var $gicentre$elm_vegalite$VegaLite$cInterpolateSpec = function (iType) {
	switch (iType.$) {
		case 'Rgb':
			var gamma = iType.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('rgb')),
						_Utils_Tuple2(
						'gamma',
						$elm$json$Json$Encode$float(gamma))
					]));
		case 'Hsl':
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('hsl'))
					]));
		case 'HslLong':
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('hsl-long'))
					]));
		case 'Lab':
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('lab'))
					]));
		case 'Hcl':
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('hcl'))
					]));
		case 'HclLong':
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('hcl-long'))
					]));
		case 'CubeHelix':
			var gamma = iType.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('cubehelix')),
						_Utils_Tuple2(
						'gamma',
						$elm$json$Json$Encode$float(gamma))
					]));
		default:
			var gamma = iType.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('cubehelix-long')),
						_Utils_Tuple2(
						'gamma',
						$elm$json$Json$Encode$float(gamma))
					]));
	}
};
var $gicentre$elm_vegalite$VegaLite$channelLabel = function (ch) {
	switch (ch.$) {
		case 'ChX':
			return 'x';
		case 'ChY':
			return 'y';
		case 'ChX2':
			return 'x2';
		case 'ChY2':
			return 'y2';
		case 'ChColor':
			return 'color';
		case 'ChOpacity':
			return 'opacity';
		case 'ChShape':
			return 'shape';
		case 'ChSize':
			return 'size';
		default:
			return 'strokeDash';
	}
};
var $gicentre$elm_vegalite$VegaLite$scaleDomainSpec = function (sdType) {
	switch (sdType.$) {
		case 'DNumbers':
			var ns = sdType.a;
			return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, ns);
		case 'DMinNumber':
			var x = sdType.a;
			return $elm$json$Json$Encode$float(x);
		case 'DMidNumber':
			var x = sdType.a;
			return $elm$json$Json$Encode$float(x);
		case 'DMaxNumber':
			var x = sdType.a;
			return $elm$json$Json$Encode$float(x);
		case 'DDateTimes':
			var ds = sdType.a;
			return A2(
				$elm$json$Json$Encode$list,
				function (d) {
					return $elm$json$Json$Encode$object(
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d));
				},
				ds);
		case 'DMinDateTime':
			var d = sdType.a;
			return $elm$json$Json$Encode$object(
				A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d));
		case 'DMaxDateTime':
			var d = sdType.a;
			return $elm$json$Json$Encode$object(
				A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d));
		case 'DStrings':
			var cats = sdType.a;
			return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, cats);
		case 'DSelection':
			var selName = sdType.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'selection',
						$elm$json$Json$Encode$string(selName))
					]));
		case 'DSelectionChannel':
			var selName = sdType.a;
			var ch = sdType.b;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'selection',
						$elm$json$Json$Encode$string(selName)),
						_Utils_Tuple2(
						'encoding',
						$elm$json$Json$Encode$string(
							$gicentre$elm_vegalite$VegaLite$channelLabel(ch)))
					]));
		case 'DSelectionField':
			var selName = sdType.a;
			var f = sdType.b;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'selection',
						$elm$json$Json$Encode$string(selName)),
						_Utils_Tuple2(
						'field',
						$elm$json$Json$Encode$string(f))
					]));
		case 'Unaggregated':
			return $elm$json$Json$Encode$string('unaggregated');
		default:
			var scDo = sdType.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'unionWith',
						$gicentre$elm_vegalite$VegaLite$scaleDomainSpec(scDo))
					]));
	}
};
var $gicentre$elm_vegalite$VegaLite$scaleLabel = function (sc) {
	switch (sc.$) {
		case 'ScLinear':
			return 'linear';
		case 'ScPow':
			return 'pow';
		case 'ScSymLog':
			return 'symlog';
		case 'ScSqrt':
			return 'sqrt';
		case 'ScLog':
			return 'log';
		case 'ScTime':
			return 'time';
		case 'ScUtc':
			return 'utc';
		case 'ScOrdinal':
			return 'ordinal';
		case 'ScBand':
			return 'band';
		case 'ScPoint':
			return 'point';
		case 'ScBinOrdinal':
			return 'bin-ordinal';
		case 'ScQuantile':
			return 'quantile';
		case 'ScQuantize':
			return 'quantize';
		default:
			return 'threshold';
	}
};
var $gicentre$elm_vegalite$VegaLite$timeUnitLabel = function (tu) {
	switch (tu.$) {
		case 'Year':
			return 'year';
		case 'YearDayOfYear':
			return 'yeardayofyear';
		case 'YearQuarter':
			return 'yearquarter';
		case 'YearQuarterMonth':
			return 'yearquartermonth';
		case 'YearMonth':
			return 'yearmonth';
		case 'YearMonthDate':
			return 'yearmonthdate';
		case 'YearMonthDateHours':
			return 'yearmonthdatehours';
		case 'YearMonthDateHoursMinutes':
			return 'yearmonthdatehoursminutes';
		case 'YearMonthDateHoursMinutesSeconds':
			return 'yearmonthdatehoursminutesseconds';
		case 'YearWeek':
			return 'yearweek';
		case 'YearWeekDay':
			return 'yearweekday';
		case 'YearWeekDayHours':
			return 'yearweekdayhours';
		case 'YearWeekDayHoursMinutes':
			return 'yearweekdayhoursminutes';
		case 'YearWeekDayHoursMinutesSeconds':
			return 'yearweekdayhoursminutesseconds';
		case 'Quarter':
			return 'quarter';
		case 'QuarterMonth':
			return 'quartermonth';
		case 'Month':
			return 'month';
		case 'MonthDate':
			return 'monthdate';
		case 'MonthDateHours':
			return 'monthdatehours';
		case 'MonthDateHoursMinutes':
			return 'monthdatehoursminutes';
		case 'MonthDateHoursMinutesSeconds':
			return 'monthdatehoursminutesseconds';
		case 'Week':
			return 'week';
		case 'WeekDay':
			return 'weekday';
		case 'WeekDayHours':
			return 'weekdayhours';
		case 'WeekDayHoursMinutes':
			return 'weekdayhoursminutes';
		case 'WeekDayHoursMinutesSeconds':
			return 'weekdayhoursminutesseconds';
		case 'Date':
			return 'date';
		case 'Day':
			return 'day';
		case 'DayOfYear':
			return 'dayofyear';
		case 'DayHours':
			return 'dayhours';
		case 'DayHoursMinutes':
			return 'dayhoursminutes';
		case 'DayHoursMinutesSeconds':
			return 'dayhoursminutesseconds';
		case 'Hours':
			return 'hours';
		case 'HoursMinutes':
			return 'hoursminutes';
		case 'HoursMinutesSeconds':
			return 'hoursminutesseconds';
		case 'Minutes':
			return 'minutes';
		case 'MinutesSeconds':
			return 'minutesseconds';
		case 'Seconds':
			return 'seconds';
		case 'SecondsMilliseconds':
			return 'secondsmilliseconds';
		case 'Milliseconds':
			return 'milliseconds';
		case 'Utc':
			return '';
		case 'TUMaxBins':
			return '';
		default:
			return '';
	}
};
var $gicentre$elm_vegalite$VegaLite$scaleNiceSpec = function (ni) {
	switch (ni.$) {
		case 'NMillisecond':
			return $elm$json$Json$Encode$string('millisecond');
		case 'NSecond':
			return $elm$json$Json$Encode$string('second');
		case 'NMinute':
			return $elm$json$Json$Encode$string('minute');
		case 'NHour':
			return $elm$json$Json$Encode$string('hour');
		case 'NDay':
			return $elm$json$Json$Encode$string('day');
		case 'NWeek':
			return $elm$json$Json$Encode$string('week');
		case 'NMonth':
			return $elm$json$Json$Encode$string('month');
		case 'NYear':
			return $elm$json$Json$Encode$string('year');
		case 'NInterval':
			var tu = ni.a;
			var step = ni.b;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'interval',
						$elm$json$Json$Encode$string(
							$gicentre$elm_vegalite$VegaLite$timeUnitLabel(tu))),
						_Utils_Tuple2(
						'step',
						$elm$json$Json$Encode$int(step))
					]));
		case 'NTrue':
			return $elm$json$Json$Encode$bool(true);
		case 'NFalse':
			return $elm$json$Json$Encode$bool(false);
		default:
			var n = ni.a;
			return $elm$json$Json$Encode$int(n);
	}
};
var $gicentre$elm_vegalite$VegaLite$schemeProperty = F2(
	function (schName, extent) {
		if (!extent.b) {
			return _Utils_Tuple2(
				'scheme',
				$elm$json$Json$Encode$string(schName));
		} else {
			if (!extent.b.b) {
				var n = extent.a;
				return _Utils_Tuple2(
					'scheme',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'name',
								$elm$json$Json$Encode$string(schName)),
								_Utils_Tuple2(
								'count',
								$elm$json$Json$Encode$float(n))
							])));
			} else {
				if (!extent.b.b.b) {
					var mn = extent.a;
					var _v1 = extent.b;
					var mx = _v1.a;
					return _Utils_Tuple2(
						'scheme',
						$elm$json$Json$Encode$object(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'name',
									$elm$json$Json$Encode$string(schName)),
									_Utils_Tuple2(
									'extent',
									A2(
										$elm$json$Json$Encode$list,
										$elm$json$Json$Encode$float,
										_List_fromArray(
											[mn, mx])))
								])));
				} else {
					return _Utils_Tuple2(
						'scheme',
						$elm$json$Json$Encode$string(schName));
				}
			}
		}
	});
var $gicentre$elm_vegalite$VegaLite$scaleProperty = function (scaleProp) {
	switch (scaleProp.$) {
		case 'SType':
			var sType = scaleProp.a;
			return _Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$scaleLabel(sType)));
		case 'SDomain':
			var sdType = scaleProp.a;
			switch (sdType.$) {
				case 'DMinNumber':
					var x = sdType.a;
					return _Utils_Tuple2(
						'domainMin',
						$elm$json$Json$Encode$float(x));
				case 'DMidNumber':
					var x = sdType.a;
					return _Utils_Tuple2(
						'domainMid',
						$elm$json$Json$Encode$float(x));
				case 'DMaxNumber':
					var x = sdType.a;
					return _Utils_Tuple2(
						'domainMax',
						$elm$json$Json$Encode$float(x));
				case 'DMinDateTime':
					var d = sdType.a;
					return _Utils_Tuple2(
						'domainMin',
						$elm$json$Json$Encode$object(
							A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d)));
				case 'DMaxDateTime':
					var d = sdType.a;
					return _Utils_Tuple2(
						'domainMax',
						$elm$json$Json$Encode$object(
							A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d)));
				default:
					return _Utils_Tuple2(
						'domain',
						$gicentre$elm_vegalite$VegaLite$scaleDomainSpec(sdType));
			}
		case 'SRange':
			var range = scaleProp.a;
			switch (range.$) {
				case 'RMinNumber':
					var x = range.a;
					return _Utils_Tuple2(
						'rangeMin',
						$elm$json$Json$Encode$float(x));
				case 'RMaxNumber':
					var x = range.a;
					return _Utils_Tuple2(
						'rangeMax',
						$elm$json$Json$Encode$float(x));
				case 'RNumbers':
					var xs = range.a;
					return _Utils_Tuple2(
						'range',
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs));
				case 'RNumberLists':
					var xss = range.a;
					return _Utils_Tuple2(
						'range',
						A2(
							$elm$json$Json$Encode$list,
							$elm$json$Json$Encode$list($elm$json$Json$Encode$float),
							xss));
				case 'RStrings':
					var ss = range.a;
					return _Utils_Tuple2(
						'range',
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, ss));
				case 'RName':
					var s = range.a;
					return _Utils_Tuple2(
						'range',
						$elm$json$Json$Encode$string(s));
				default:
					var s = range.a;
					return _Utils_Tuple2(
						'range',
						$elm$json$Json$Encode$object(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'field',
									$elm$json$Json$Encode$string(s))
								])));
			}
		case 'SScheme':
			var schName = scaleProp.a;
			var extent = scaleProp.b;
			return A2($gicentre$elm_vegalite$VegaLite$schemeProperty, schName, extent);
		case 'SAlign':
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'align',
				$elm$json$Json$Encode$float(x));
		case 'SPadding':
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'padding',
				$elm$json$Json$Encode$float(x));
		case 'SBase':
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'base',
				$elm$json$Json$Encode$float(x));
		case 'SExponent':
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'exponent',
				$elm$json$Json$Encode$float(x));
		case 'SDomainMid':
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'domainMid',
				$elm$json$Json$Encode$float(x));
		case 'SConstant':
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'constant',
				$elm$json$Json$Encode$float(x));
		case 'SPaddingInner':
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'paddingInner',
				$elm$json$Json$Encode$float(x));
		case 'SPaddingOuter':
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'paddingOuter',
				$elm$json$Json$Encode$float(x));
		case 'SRound':
			var b = scaleProp.a;
			return _Utils_Tuple2(
				'round',
				$elm$json$Json$Encode$bool(b));
		case 'SClamp':
			var b = scaleProp.a;
			return _Utils_Tuple2(
				'clamp',
				$elm$json$Json$Encode$bool(b));
		case 'SInterpolate':
			var interp = scaleProp.a;
			return _Utils_Tuple2(
				'interpolate',
				$gicentre$elm_vegalite$VegaLite$cInterpolateSpec(interp));
		case 'SNice':
			var ni = scaleProp.a;
			return _Utils_Tuple2(
				'nice',
				$gicentre$elm_vegalite$VegaLite$scaleNiceSpec(ni));
		case 'SZero':
			var b = scaleProp.a;
			return _Utils_Tuple2(
				'zero',
				$elm$json$Json$Encode$bool(b));
		default:
			var b = scaleProp.a;
			return _Utils_Tuple2(
				'reverse',
				$elm$json$Json$Encode$bool(b));
	}
};
var $gicentre$elm_vegalite$VegaLite$sortProperties = function (sp) {
	switch (sp.$) {
		case 'Ascending':
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'order',
					$elm$json$Json$Encode$string('ascending'))
				]);
		case 'Descending':
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'order',
					$elm$json$Json$Encode$string('descending'))
				]);
		case 'ByChannel':
			var ch = sp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'encoding',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$channelLabel(ch)))
				]);
		case 'ByFieldOp':
			var field = sp.a;
			var op = sp.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(field)),
					_Utils_Tuple2(
					'op',
					$gicentre$elm_vegalite$VegaLite$operationSpec(op))
				]);
		case 'ByRepeatOp':
			var arr = sp.a;
			var op = sp.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'repeat',
								$elm$json$Json$Encode$string(
									$gicentre$elm_vegalite$VegaLite$arrangementLabel(arr)))
							]))),
					_Utils_Tuple2(
					'op',
					$gicentre$elm_vegalite$VegaLite$operationSpec(op))
				]);
		default:
			return _List_Nil;
	}
};
var $gicentre$elm_vegalite$VegaLite$timeUnitProperties = function (tUnit) {
	switch (tUnit.$) {
		case 'Utc':
			var tu = tUnit.a;
			return A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					'utc',
					$elm$json$Json$Encode$bool(true)),
				$gicentre$elm_vegalite$VegaLite$timeUnitProperties(tu));
		case 'TUMaxBins':
			var n = tUnit.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'maxbins',
					$elm$json$Json$Encode$int(n))
				]);
		case 'TUStep':
			var x = tUnit.a;
			var tu = tUnit.b;
			return A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					'step',
					$elm$json$Json$Encode$float(x)),
				$gicentre$elm_vegalite$VegaLite$timeUnitProperties(tu));
		default:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'unit',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$timeUnitLabel(tUnit)))
				]);
	}
};
var $gicentre$elm_vegalite$VegaLite$timeUnitSpec = function (tUnit) {
	return $elm$json$Json$Encode$object(
		$gicentre$elm_vegalite$VegaLite$timeUnitProperties(tUnit));
};
var $gicentre$elm_vegalite$VegaLite$booleanOpSpec = function (bo) {
	switch (bo.$) {
		case 'Expr':
			var ex = bo.a;
			return $elm$json$Json$Encode$string(ex);
		case 'FilterOp':
			var f = bo.a;
			return $gicentre$elm_vegalite$VegaLite$filterSpec(f);
		case 'FilterOpTrans':
			var tr = bo.a;
			var f = bo.b;
			return A2($gicentre$elm_vegalite$VegaLite$trFilterSpec, tr, f);
		case 'SelectionName':
			var selName = bo.a;
			return $elm$json$Json$Encode$string(selName);
		case 'Selection':
			var sel = bo.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'selection',
						$elm$json$Json$Encode$string(sel))
					]));
		case 'And':
			var operand1 = bo.a;
			var operand2 = bo.b;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'and',
						A2(
							$elm$json$Json$Encode$list,
							$gicentre$elm_vegalite$VegaLite$booleanOpSpec,
							_List_fromArray(
								[operand1, operand2])))
					]));
		case 'Or':
			var operand1 = bo.a;
			var operand2 = bo.b;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'or',
						A2(
							$elm$json$Json$Encode$list,
							$gicentre$elm_vegalite$VegaLite$booleanOpSpec,
							_List_fromArray(
								[operand1, operand2])))
					]));
		default:
			var operand = bo.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'not',
						$gicentre$elm_vegalite$VegaLite$booleanOpSpec(operand))
					]));
	}
};
var $gicentre$elm_vegalite$VegaLite$filterSpec = function (f) {
	switch (f.$) {
		case 'FExpr':
			var ex = f.a;
			return $elm$json$Json$Encode$string(ex);
		case 'FCompose':
			var boolExpr = f.a;
			return $gicentre$elm_vegalite$VegaLite$booleanOpSpec(boolExpr);
		default:
			return $elm$json$Json$Encode$object(
				$gicentre$elm_vegalite$VegaLite$filterProperties(f));
	}
};
var $gicentre$elm_vegalite$VegaLite$markChannelProperties = function (field) {
	switch (field.$) {
		case 'MName':
			var s = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(s))
				]);
		case 'MDatum':
			var d = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'datum',
					$gicentre$elm_vegalite$VegaLite$dataValueSpec(d))
				]);
		case 'MRepeat':
			var arr = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'repeat',
								$elm$json$Json$Encode$string(
									$gicentre$elm_vegalite$VegaLite$arrangementLabel(arr)))
							])))
				]);
		case 'MRepeatDatum':
			var arr = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'datum',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'repeat',
								$elm$json$Json$Encode$string(
									$gicentre$elm_vegalite$VegaLite$arrangementLabel(arr)))
							])))
				]);
		case 'MmType':
			var t = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$measurementLabel(t)))
				]);
		case 'MScale':
			var sps = field.a;
			return _Utils_eq(sps, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('scale', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'scale',
					$elm$json$Json$Encode$object(
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$scaleProperty, sps)))
				]);
		case 'MLegend':
			var lps = field.a;
			return _Utils_eq(lps, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('legend', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'legend',
					$elm$json$Json$Encode$object(
						A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$legendProperty, lps)))
				]);
		case 'MBin':
			var bps = field.a;
			return _List_fromArray(
				[
					$gicentre$elm_vegalite$VegaLite$bin(bps)
				]);
		case 'MBand':
			var x = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'band',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MSort':
			var sps = field.a;
			_v2$4:
			while (true) {
				if (!sps.b) {
					return _List_fromArray(
						[
							_Utils_Tuple2('sort', $elm$json$Json$Encode$null)
						]);
				} else {
					if (!sps.b.b) {
						switch (sps.a.$) {
							case 'Ascending':
								var _v3 = sps.a;
								return _List_fromArray(
									[
										_Utils_Tuple2(
										'sort',
										$elm$json$Json$Encode$string('ascending'))
									]);
							case 'Descending':
								var _v4 = sps.a;
								return _List_fromArray(
									[
										_Utils_Tuple2(
										'sort',
										$elm$json$Json$Encode$string('descending'))
									]);
							case 'CustomSort':
								var dvs = sps.a.a;
								return _List_fromArray(
									[
										_Utils_Tuple2(
										'sort',
										$gicentre$elm_vegalite$VegaLite$toList(
											$gicentre$elm_vegalite$VegaLite$dataValuesSpecs(dvs)))
									]);
							default:
								break _v2$4;
						}
					} else {
						break _v2$4;
					}
				}
			}
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'sort',
					$elm$json$Json$Encode$object(
						A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$sortProperties, sps)))
				]);
		case 'MBinned':
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'bin',
					$elm$json$Json$Encode$string('binned'))
				]);
		case 'MSelectionCondition':
			var selName = field.a;
			var ifClause = field.b;
			var elseClause = field.c;
			return A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					'condition',
					$elm$json$Json$Encode$object(
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								'selection',
								$gicentre$elm_vegalite$VegaLite$booleanOpSpec(selName)),
							A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markChannelProperties, ifClause)))),
				A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markChannelProperties, elseClause));
		case 'MDataCondition':
			var tests = field.a;
			var elseClause = field.b;
			var testClause = function (_v6) {
				var predicate = _v6.a;
				var ifClause = _v6.b;
				return $elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'test',
							$gicentre$elm_vegalite$VegaLite$booleanOpSpec(predicate)),
						A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markChannelProperties, ifClause)));
			};
			return A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					'condition',
					function () {
						if (tests.b && (!tests.b.b)) {
							var test = tests.a;
							return testClause(test);
						} else {
							return A2($elm$json$Json$Encode$list, testClause, tests);
						}
					}()),
				A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markChannelProperties, elseClause));
		case 'MTimeUnit':
			var tu = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'timeUnit',
					$gicentre$elm_vegalite$VegaLite$timeUnitSpec(tu))
				]);
		case 'MTitle':
			var t = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'title',
					$gicentre$elm_vegalite$VegaLite$multilineTextSpec(t))
				]);
		case 'MAggregate':
			var op = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'aggregate',
					$gicentre$elm_vegalite$VegaLite$operationSpec(op))
				]);
		case 'MPath':
			var s = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'value',
					$elm$json$Json$Encode$string(s))
				]);
		case 'MNumber':
			var x = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'value',
					$elm$json$Json$Encode$float(x))
				]);
		case 'MString':
			var s = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'value',
					$elm$json$Json$Encode$string(s))
				]);
		default:
			var b = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'value',
					$elm$json$Json$Encode$bool(b))
				]);
	}
};
var $gicentre$elm_vegalite$VegaLite$trFilterSpec = F2(
	function (mc, f) {
		switch (f.$) {
			case 'FExpr':
				var ex = f.a;
				return $elm$json$Json$Encode$string(ex);
			case 'FCompose':
				var boolExpr = f.a;
				return $gicentre$elm_vegalite$VegaLite$booleanOpSpec(boolExpr);
			default:
				return $elm$json$Json$Encode$object(
					_Utils_ap(
						$gicentre$elm_vegalite$VegaLite$markChannelProperties(mc),
						$gicentre$elm_vegalite$VegaLite$filterProperties(f)));
		}
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $gicentre$elm_vegalite$VegaLite$sideLabel = function (side) {
	switch (side.$) {
		case 'STop':
			return 'top';
		case 'SBottom':
			return 'bottom';
		case 'SLeft':
			return 'left';
		default:
			return 'right';
	}
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $gicentre$elm_vegalite$VegaLite$axisProperty = function (axisProp) {
	switch (axisProp.$) {
		case 'AxAria':
			var aps = axisProp.a;
			if (!aps.b) {
				return _List_fromArray(
					[
						$gicentre$elm_vegalite$VegaLite$ariaProperty(
						$gicentre$elm_vegalite$VegaLite$ArAria(false))
					]);
			} else {
				return A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$ariaProperty, aps);
			}
		case 'AxBandPosition':
			var n = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'bandPosition',
					$elm$json$Json$Encode$float(n))
				]);
		case 'AxDataCondition':
			var predicate = axisProp.a;
			var cap = axisProp.b;
			var firstProp = A2(
				$elm$core$Basics$composeR,
				$elm$core$List$head,
				$elm$core$Maybe$withDefault(
					_Utils_Tuple2('', $elm$json$Json$Encode$null)));
			var _v2 = function () {
				switch (cap.$) {
					case 'CAxLabelAlign':
						var ha1 = cap.a;
						var ha2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelAlign(ha1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelAlign(ha2))));
					case 'CAxLabelBaseline':
						var va1 = cap.a;
						var va2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelBaseline(va1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelBaseline(va2))));
					case 'CAxLabelColor':
						var c1 = cap.a;
						var c2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelColor(c1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelColor(c2))));
					case 'CAxLabelFont':
						var f1 = cap.a;
						var f2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFont(f1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFont(f2))));
					case 'CAxLabelFontSize':
						var s1 = cap.a;
						var s2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFontSize(s1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFontSize(s2))));
					case 'CAxLabelFontStyle':
						var s1 = cap.a;
						var s2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFontStyle(s1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFontStyle(s2))));
					case 'CAxLabelFontWeight':
						var w1 = cap.a;
						var w2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFontWeight(w1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFontWeight(w2))));
					case 'CAxLabelOffset':
						var o1 = cap.a;
						var o2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelOffset(o1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelOffset(o2))));
					case 'CAxLabelOpacity':
						var o1 = cap.a;
						var o2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelOpacity(o1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelOpacity(o2))));
					case 'CAxLabelPadding':
						var p1 = cap.a;
						var p2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelPadding(p1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelPadding(p2))));
					case 'CAxTickColor':
						var c1 = cap.a;
						var c2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickColor(c1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickColor(c2))));
					case 'CAxTickDash':
						var d1 = cap.a;
						var d2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickDash(d1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickDash(d2))));
					case 'CAxTickDashOffset':
						var o1 = cap.a;
						var o2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickDashOffset(o1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickDashOffset(o2))));
					case 'CAxTickOpacity':
						var o1 = cap.a;
						var o2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickOpacity(o1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickOpacity(o2))));
					case 'CAxTickSize':
						var s1 = cap.a;
						var s2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickSize(s1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickSize(s2))));
					case 'CAxTickWidth':
						var w1 = cap.a;
						var w2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickWidth(w1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickWidth(w2))));
					case 'CAxGridColor':
						var c1 = cap.a;
						var c2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridColor(c1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridColor(c2))));
					case 'CAxGridDash':
						var d1 = cap.a;
						var d2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridDash(d1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridDash(d2))));
					case 'CAxGridDashOffset':
						var o1 = cap.a;
						var o2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridDashOffset(o1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridDashOffset(o2))));
					case 'CAxGridOpacity':
						var o1 = cap.a;
						var o2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridOpacity(o1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridOpacity(o2))));
					default:
						var w1 = cap.a;
						var w2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridWidth(w1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridWidth(w2))));
				}
			}();
			var ifProp = _v2.a;
			var elseProp = _v2.b;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					ifProp.a,
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'condition',
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'test',
											$gicentre$elm_vegalite$VegaLite$booleanOpSpec(predicate)),
											_Utils_Tuple2('value', ifProp.b)
										]))),
								_Utils_Tuple2('value', elseProp.b)
							])))
				]);
		case 'AxFormat':
			var fmt = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'format',
					$elm$json$Json$Encode$string(fmt))
				]);
		case 'AxFormatAsNum':
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'formatType',
					$elm$json$Json$Encode$string('number'))
				]);
		case 'AxFormatAsTemporal':
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'formatType',
					$elm$json$Json$Encode$string('time'))
				]);
		case 'AxFormatAsCustom':
			var formatter = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'formatType',
					$elm$json$Json$Encode$string(formatter))
				]);
		case 'AxGridCap':
			var c = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridCap',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$strokeCapLabel(c)))
				]);
		case 'AxGridColor':
			var c = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridColor',
					$elm$json$Json$Encode$string(c))
				]);
		case 'AxGridDash':
			var ds = axisProp.a;
			return _Utils_eq(ds, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('gridDash', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'gridDash',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, ds))
				]);
		case 'AxGridDashOffset':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridDashOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxGridOpacity':
			var o = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridOpacity',
					$elm$json$Json$Encode$float(o))
				]);
		case 'AxGridWidth':
			var w = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridWidth',
					$elm$json$Json$Encode$float(w))
				]);
		case 'AxLabels':
			var b = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labels',
					$elm$json$Json$Encode$bool(b))
				]);
		case 'AxLabelAlign':
			var ha = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(ha)))
				]);
		case 'AxLabelBaseline':
			var va = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelBaseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 'AxLabelBound':
			var mn = axisProp.a;
			if (mn.$ === 'Just') {
				var n = mn.a;
				return (n === 1) ? _List_fromArray(
					[
						_Utils_Tuple2(
						'labelBound',
						$elm$json$Json$Encode$bool(true))
					]) : _List_fromArray(
					[
						_Utils_Tuple2(
						'labelBound',
						$elm$json$Json$Encode$float(n))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'labelBound',
						$elm$json$Json$Encode$bool(false))
					]);
			}
		case 'AxLabelAngle':
			var a = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelAngle',
					$elm$json$Json$Encode$float(a))
				]);
		case 'AxLabelColor':
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 'AxLabelExpr':
			var ex = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelExpr',
					$elm$json$Json$Encode$string(ex))
				]);
		case 'AxLabelFlush':
			var mn = axisProp.a;
			if (mn.$ === 'Just') {
				var n = mn.a;
				return (n === 1) ? _List_fromArray(
					[
						_Utils_Tuple2(
						'labelFlush',
						$elm$json$Json$Encode$bool(true))
					]) : _List_fromArray(
					[
						_Utils_Tuple2(
						'labelFlush',
						$elm$json$Json$Encode$float(n))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'labelFlush',
						$elm$json$Json$Encode$bool(false))
					]);
			}
		case 'AxLabelFlushOffset':
			var n = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFlushOffset',
					$elm$json$Json$Encode$float(n))
				]);
		case 'AxLabelFont':
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFont',
					$elm$json$Json$Encode$string(s))
				]);
		case 'AxLabelFontSize':
			var n = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFontSize',
					$elm$json$Json$Encode$float(n))
				]);
		case 'AxLabelFontStyle':
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFontStyle',
					$elm$json$Json$Encode$string(s))
				]);
		case 'AxLabelFontWeight':
			var fw = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFontWeight',
					$gicentre$elm_vegalite$VegaLite$fontWeightSpec(fw))
				]);
		case 'AxLabelLimit':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelLimit',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxLabelLineHeight':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelLineHeight',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxLabelOffset':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxLabelOpacity':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxLabelOverlap':
			var strat = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOverlap',
					$gicentre$elm_vegalite$VegaLite$overlapStrategySpec(strat))
				]);
		case 'AxLabelPadding':
			var pad = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelPadding',
					$elm$json$Json$Encode$float(pad))
				]);
		case 'AxLabelSeparation':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelSeparation',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxDomain':
			var b = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domain',
					$elm$json$Json$Encode$bool(b))
				]);
		case 'AxDomainCap':
			var c = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainCap',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$strokeCapLabel(c)))
				]);
		case 'AxDomainColor':
			var c = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainColor',
					$elm$json$Json$Encode$string(c))
				]);
		case 'AxDomainDash':
			var ds = axisProp.a;
			return _Utils_eq(ds, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('domainDash', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'domainDash',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, ds))
				]);
		case 'AxDomainDashOffset':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainDashOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxDomainOpacity':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxDomainWidth':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxGrid':
			var b = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'grid',
					$elm$json$Json$Encode$bool(b))
				]);
		case 'AxMaxExtent':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'maxExtent',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxMinExtent':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'minExtent',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxOrient':
			var side = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'orient',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$sideLabel(side)))
				]);
		case 'AxOffset':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'offset',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxPosition':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'position',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxStyle':
			var ss = axisProp.a;
			if (ss.b && (!ss.b.b)) {
				var s = ss.a;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'style',
						$elm$json$Json$Encode$string(s))
					]);
			} else {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'style',
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, ss))
					]);
			}
		case 'AxZIndex':
			var n = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'zindex',
					$elm$json$Json$Encode$int(n))
				]);
		case 'AxTicks':
			var b = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'ticks',
					$elm$json$Json$Encode$bool(b))
				]);
		case 'AxTickColor':
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 'AxTickCount':
			var tc = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickCount',
					$gicentre$elm_vegalite$VegaLite$scaleNiceSpec(tc))
				]);
		case 'AxTickDash':
			var ds = axisProp.a;
			return _Utils_eq(ds, _List_Nil) ? _List_fromArray(
				[
					_Utils_Tuple2('tickDash', $elm$json$Json$Encode$null)
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'tickDash',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, ds))
				]);
		case 'AxTickDashOffset':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickDashOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxTickExtra':
			var b = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickExtra',
					$elm$json$Json$Encode$bool(b))
				]);
		case 'AxTickOffset':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxTickOpacity':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxTickRound':
			var b = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickRound',
					$elm$json$Json$Encode$bool(b))
				]);
		case 'AxTickMinStep':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickMinStep',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxTickSize':
			var sz = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickSize',
					$elm$json$Json$Encode$float(sz))
				]);
		case 'AxTickWidth':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxValues':
			var vals = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'values',
					$gicentre$elm_vegalite$VegaLite$toList(
						$gicentre$elm_vegalite$VegaLite$dataValuesSpecs(vals)))
				]);
		case 'AxTitle':
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'title',
					$gicentre$elm_vegalite$VegaLite$multilineTextSpec(s))
				]);
		case 'AxTitleAlign':
			var al = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(al)))
				]);
		case 'AxTitleAngle':
			var a = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleAngle',
					$elm$json$Json$Encode$float(a))
				]);
		case 'AxTitleAnchor':
			var an = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleAnchor',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$anchorLabel(an)))
				]);
		case 'AxTitleBaseline':
			var va = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleBaseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 'AxTitleColor':
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 'AxTitleFont':
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFont',
					$elm$json$Json$Encode$string(s))
				]);
		case 'AxTitleFontSize':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxTitleFontStyle':
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontStyle',
					$elm$json$Json$Encode$string(s))
				]);
		case 'AxTitleFontWeight':
			var fw = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontWeight',
					$gicentre$elm_vegalite$VegaLite$fontWeightSpec(fw))
				]);
		case 'AxTitleLimit':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleLimit',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxTitleOpacity':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 'AxTitlePadding':
			var pad = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titlePadding',
					$elm$json$Json$Encode$float(pad))
				]);
		case 'AxTitleX':
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleX',
					$elm$json$Json$Encode$float(x))
				]);
		default:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleY',
					$elm$json$Json$Encode$float(x))
				]);
	}
};
var $gicentre$elm_vegalite$VegaLite$imMethodLabel = function (method) {
	switch (method.$) {
		case 'ImValue':
			return 'value';
		case 'ImMean':
			return 'mean';
		case 'ImMedian':
			return 'median';
		case 'ImMax':
			return 'max';
		default:
			return 'min';
	}
};
var $gicentre$elm_vegalite$VegaLite$imputeProperty = function (ip) {
	switch (ip.$) {
		case 'ImFrame':
			if (ip.a.$ === 'Just') {
				if (ip.b.$ === 'Just') {
					var n1 = ip.a.a;
					var n2 = ip.b.a;
					return _Utils_Tuple2(
						'frame',
						A2(
							$elm$json$Json$Encode$list,
							$elm$json$Json$Encode$int,
							_List_fromArray(
								[n1, n2])));
				} else {
					var n1 = ip.a.a;
					var _v2 = ip.b;
					return _Utils_Tuple2(
						'frame',
						$gicentre$elm_vegalite$VegaLite$toList(
							_List_fromArray(
								[
									$elm$json$Json$Encode$int(n1),
									$elm$json$Json$Encode$null
								])));
				}
			} else {
				if (ip.b.$ === 'Just') {
					var _v1 = ip.a;
					var n2 = ip.b.a;
					return _Utils_Tuple2(
						'frame',
						$gicentre$elm_vegalite$VegaLite$toList(
							_List_fromArray(
								[
									$elm$json$Json$Encode$null,
									$elm$json$Json$Encode$int(n2)
								])));
				} else {
					var _v3 = ip.a;
					var _v4 = ip.b;
					return _Utils_Tuple2(
						'frame',
						$gicentre$elm_vegalite$VegaLite$toList(
							_List_fromArray(
								[$elm$json$Json$Encode$null, $elm$json$Json$Encode$null])));
				}
			}
		case 'ImKeyVals':
			var dVals = ip.a;
			return _Utils_Tuple2(
				'keyvals',
				$gicentre$elm_vegalite$VegaLite$toList(
					$gicentre$elm_vegalite$VegaLite$dataValuesSpecs(dVals)));
		case 'ImKeyValSequence':
			var start = ip.a;
			var stop = ip.b;
			var step = ip.c;
			return _Utils_Tuple2(
				'keyvals',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'start',
							$elm$json$Json$Encode$float(start)),
							_Utils_Tuple2(
							'stop',
							$elm$json$Json$Encode$float(stop)),
							_Utils_Tuple2(
							'step',
							$elm$json$Json$Encode$float(step))
						])));
		case 'ImMethod':
			var method = ip.a;
			return _Utils_Tuple2(
				'method',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$imMethodLabel(method)));
		case 'ImNewValue':
			var dVal = ip.a;
			return _Utils_Tuple2(
				'value',
				$gicentre$elm_vegalite$VegaLite$dataValueSpec(dVal));
		default:
			var fields = ip.a;
			return _Utils_Tuple2(
				'groupby',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, fields));
	}
};
var $gicentre$elm_vegalite$VegaLite$stackOffsetSpec = function (sp) {
	switch (sp.$) {
		case 'OfZero':
			return $elm$json$Json$Encode$string('zero');
		case 'OfNormalize':
			return $elm$json$Json$Encode$string('normalize');
		case 'OfCenter':
			return $elm$json$Json$Encode$string('center');
		default:
			return $elm$json$Json$Encode$null;
	}
};
var $gicentre$elm_vegalite$VegaLite$stackOffsetProperty = function (offset) {
	return _Utils_Tuple2(
		'stack',
		$gicentre$elm_vegalite$VegaLite$stackOffsetSpec(offset));
};
var $gicentre$elm_vegalite$VegaLite$positionChannelProperty = function (pDef) {
	switch (pDef.$) {
		case 'PName':
			var s = pDef.a;
			return _Utils_Tuple2(
				'field',
				$elm$json$Json$Encode$string(s));
		case 'PDatum':
			var d = pDef.a;
			return _Utils_Tuple2(
				'datum',
				$gicentre$elm_vegalite$VegaLite$dataValueSpec(d));
		case 'PmType':
			var measure = pDef.a;
			return _Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$measurementLabel(measure)));
		case 'PBin':
			var bps = pDef.a;
			return $gicentre$elm_vegalite$VegaLite$bin(bps);
		case 'PBinned':
			return _Utils_Tuple2(
				'bin',
				$elm$json$Json$Encode$string('binned'));
		case 'PAggregate':
			var op = pDef.a;
			return _Utils_Tuple2(
				'aggregate',
				$gicentre$elm_vegalite$VegaLite$operationSpec(op));
		case 'PTimeUnit':
			var tu = pDef.a;
			return _Utils_Tuple2(
				'timeUnit',
				$gicentre$elm_vegalite$VegaLite$timeUnitSpec(tu));
		case 'PTitle':
			var t = pDef.a;
			return _Utils_Tuple2(
				'title',
				$gicentre$elm_vegalite$VegaLite$multilineTextSpec(t));
		case 'PSort':
			var sps = pDef.a;
			_v1$4:
			while (true) {
				if (!sps.b) {
					return _Utils_Tuple2('sort', $elm$json$Json$Encode$null);
				} else {
					if (!sps.b.b) {
						switch (sps.a.$) {
							case 'Ascending':
								var _v2 = sps.a;
								return _Utils_Tuple2(
									'sort',
									$elm$json$Json$Encode$string('ascending'));
							case 'Descending':
								var _v3 = sps.a;
								return _Utils_Tuple2(
									'sort',
									$elm$json$Json$Encode$string('descending'));
							case 'CustomSort':
								var dvs = sps.a.a;
								return _Utils_Tuple2(
									'sort',
									$gicentre$elm_vegalite$VegaLite$toList(
										$gicentre$elm_vegalite$VegaLite$dataValuesSpecs(dvs)));
							default:
								break _v1$4;
						}
					} else {
						break _v1$4;
					}
				}
			}
			return _Utils_Tuple2(
				'sort',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$sortProperties, sps)));
		case 'PBand':
			var x = pDef.a;
			return _Utils_Tuple2(
				'band',
				$elm$json$Json$Encode$float(x));
		case 'PScale':
			var sps = pDef.a;
			return _Utils_eq(sps, _List_Nil) ? _Utils_Tuple2('scale', $elm$json$Json$Encode$null) : _Utils_Tuple2(
				'scale',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$scaleProperty, sps)));
		case 'PAxis':
			var aps = pDef.a;
			return _Utils_eq(aps, _List_Nil) ? _Utils_Tuple2('axis', $elm$json$Json$Encode$null) : _Utils_Tuple2(
				'axis',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$axisProperty, aps)));
		case 'PStack':
			var so = pDef.a;
			return $gicentre$elm_vegalite$VegaLite$stackOffsetProperty(so);
		case 'PRepeat':
			var arr = pDef.a;
			return _Utils_Tuple2(
				'field',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'repeat',
							$elm$json$Json$Encode$string(
								$gicentre$elm_vegalite$VegaLite$arrangementLabel(arr)))
						])));
		case 'PWidth':
			return _Utils_Tuple2(
				'value',
				$elm$json$Json$Encode$string('width'));
		case 'PHeight':
			return _Utils_Tuple2(
				'value',
				$elm$json$Json$Encode$string('height'));
		case 'PNumber':
			var x = pDef.a;
			return _Utils_Tuple2(
				'value',
				$elm$json$Json$Encode$float(x));
		default:
			var ips = pDef.a;
			return _Utils_Tuple2(
				'impute',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$imputeProperty, ips)));
	}
};
var $gicentre$elm_vegalite$VegaLite$positionLabel = function (pChannel) {
	switch (pChannel.$) {
		case 'X':
			return 'x';
		case 'Y':
			return 'y';
		case 'X2':
			return 'x2';
		case 'Y2':
			return 'y2';
		case 'Theta':
			return 'theta';
		case 'Theta2':
			return 'theta2';
		case 'R':
			return 'radius';
		case 'R2':
			return 'radius2';
		case 'XError':
			return 'xError';
		case 'YError':
			return 'yError';
		case 'XError2':
			return 'xError2';
		case 'YError2':
			return 'yError2';
		case 'Longitude':
			return 'longitude';
		case 'Latitude':
			return 'latitude';
		case 'Longitude2':
			return 'longitude2';
		default:
			return 'latitude2';
	}
};
var $gicentre$elm_vegalite$VegaLite$position = F2(
	function (pos, pDefs) {
		return $elm$core$List$cons(
			_Utils_Tuple2(
				$gicentre$elm_vegalite$VegaLite$positionLabel(pos),
				$elm$json$Json$Encode$object(
					A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$positionChannelProperty, pDefs))));
	});
var $gicentre$elm_vegalite$VegaLite$VLRepeat = {$: 'VLRepeat'};
var $gicentre$elm_vegalite$VegaLite$repeatFieldsProperty = function (fields) {
	switch (fields.$) {
		case 'RowFields':
			var fs = fields.a;
			return _Utils_Tuple2(
				'row',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, fs));
		case 'ColumnFields':
			var fs = fields.a;
			return _Utils_Tuple2(
				'column',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, fs));
		default:
			var fs = fields.a;
			return _Utils_Tuple2(
				'layer',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, fs));
	}
};
var $gicentre$elm_vegalite$VegaLite$repeat = function (fields) {
	return _Utils_Tuple2(
		$gicentre$elm_vegalite$VegaLite$VLRepeat,
		$elm$json$Json$Encode$object(
			A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$repeatFieldsProperty, fields)));
};
var $gicentre$elm_vegalite$VegaLite$RowFields = function (a) {
	return {$: 'RowFields', a: a};
};
var $gicentre$elm_vegalite$VegaLite$rowFields = $gicentre$elm_vegalite$VegaLite$RowFields;
var $gicentre$elm_vegalite$VegaLite$VLSpec = {$: 'VLSpec'};
var $gicentre$elm_vegalite$VegaLite$specification = function (spec) {
	return _Utils_Tuple2($gicentre$elm_vegalite$VegaLite$VLSpec, spec);
};
var $gicentre$elm_vegalite$VegaLite$VLTitle = {$: 'VLTitle'};
var $gicentre$elm_vegalite$VegaLite$tfLabel = function (tf) {
	if (tf.$ === 'FrGroup') {
		return 'group';
	} else {
		return 'bounds';
	}
};
var $gicentre$elm_vegalite$VegaLite$titleConfigProperty = function (titleCfg) {
	switch (titleCfg.$) {
		case 'TAnchor':
			var an = titleCfg.a;
			return _Utils_Tuple2(
				'anchor',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$anchorLabel(an)));
		case 'TAngle':
			var x = titleCfg.a;
			return _Utils_Tuple2(
				'angle',
				$elm$json$Json$Encode$float(x));
		case 'TBaseline':
			var va = titleCfg.a;
			return _Utils_Tuple2(
				'baseline',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)));
		case 'TColor':
			var clr = titleCfg.a;
			return _Utils_Tuple2(
				'color',
				$elm$json$Json$Encode$string(clr));
		case 'TFont':
			var fnt = titleCfg.a;
			return _Utils_Tuple2(
				'font',
				$elm$json$Json$Encode$string(fnt));
		case 'TFontSize':
			var x = titleCfg.a;
			return _Utils_Tuple2(
				'fontSize',
				$elm$json$Json$Encode$float(x));
		case 'TFontStyle':
			var s = titleCfg.a;
			return _Utils_Tuple2(
				'fontStyle',
				$elm$json$Json$Encode$string(s));
		case 'TFrame':
			var tf = titleCfg.a;
			return _Utils_Tuple2(
				'frame',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$tfLabel(tf)));
		case 'TFontWeight':
			var w = titleCfg.a;
			return _Utils_Tuple2(
				'fontWeight',
				$gicentre$elm_vegalite$VegaLite$fontWeightSpec(w));
		case 'TLimit':
			var x = titleCfg.a;
			return _Utils_Tuple2(
				'limit',
				$elm$json$Json$Encode$float(x));
		case 'TLineHeight':
			var x = titleCfg.a;
			return _Utils_Tuple2(
				'lineHeight',
				$elm$json$Json$Encode$float(x));
		case 'TOffset':
			var x = titleCfg.a;
			return _Utils_Tuple2(
				'offset',
				$elm$json$Json$Encode$float(x));
		case 'TOrient':
			var sd = titleCfg.a;
			return _Utils_Tuple2(
				'orient',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$sideLabel(sd)));
		case 'TStyle':
			var ss = titleCfg.a;
			if (ss.b && (!ss.b.b)) {
				var s = ss.a;
				return _Utils_Tuple2(
					'style',
					$elm$json$Json$Encode$string(s));
			} else {
				return _Utils_Tuple2(
					'style',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, ss));
			}
		case 'TSubtitle':
			var s = titleCfg.a;
			return _Utils_Tuple2(
				'subtitle',
				$gicentre$elm_vegalite$VegaLite$multilineTextSpec(s));
		case 'TSubtitleColor':
			var s = titleCfg.a;
			return _Utils_Tuple2(
				'subtitleColor',
				$elm$json$Json$Encode$string(s));
		case 'TSubtitleFont':
			var s = titleCfg.a;
			return _Utils_Tuple2(
				'subtitleFont',
				$elm$json$Json$Encode$string(s));
		case 'TSubtitleFontSize':
			var x = titleCfg.a;
			return _Utils_Tuple2(
				'subtitleFontSize',
				$elm$json$Json$Encode$float(x));
		case 'TSubtitleFontStyle':
			var s = titleCfg.a;
			return _Utils_Tuple2(
				'subtitleFontStyle',
				$elm$json$Json$Encode$string(s));
		case 'TSubtitleFontWeight':
			var w = titleCfg.a;
			return _Utils_Tuple2(
				'subtitleFontWeight',
				$gicentre$elm_vegalite$VegaLite$fontWeightSpec(w));
		case 'TSubtitleLineHeight':
			var x = titleCfg.a;
			return _Utils_Tuple2(
				'subtitleLineHeight',
				$elm$json$Json$Encode$float(x));
		case 'TSubtitlePadding':
			var x = titleCfg.a;
			return _Utils_Tuple2(
				'subtitlePadding',
				$elm$json$Json$Encode$float(x));
		default:
			var n = titleCfg.a;
			return _Utils_Tuple2(
				'zindex',
				$elm$json$Json$Encode$int(n));
	}
};
var $gicentre$elm_vegalite$VegaLite$title = F2(
	function (txt, tps) {
		return _Utils_Tuple2(
			$gicentre$elm_vegalite$VegaLite$VLTitle,
			$elm$json$Json$Encode$object(
				A2(
					$elm$core$List$cons,
					_Utils_Tuple2(
						'text',
						$gicentre$elm_vegalite$VegaLite$multilineTextSpec(txt)),
					A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$titleConfigProperty, tps))));
	});
var $gicentre$elm_vegalite$VegaLite$toVegaLite = function (spec) {
	return $elm$json$Json$Encode$object(
		A2(
			$elm$core$List$cons,
			_Utils_Tuple2(
				'$schema',
				$elm$json$Json$Encode$string('https://vega.github.io/schema/vega-lite/v4.json')),
			A2(
				$elm$core$List$map,
				function (_v0) {
					var s = _v0.a;
					var v = _v0.b;
					return _Utils_Tuple2(
						$gicentre$elm_vegalite$VegaLite$vlPropertyLabel(s),
						v);
				},
				spec)));
};
var $author$project$HelloWorld$myVis = function () {
	var weatherColors = $gicentre$elm_vegalite$VegaLite$categoricalDomainMap(
		_List_fromArray(
			[
				_Utils_Tuple2('sun', '#e7ba52'),
				_Utils_Tuple2('fog', '#c7c7c7'),
				_Utils_Tuple2('drizzle', '#aec7ea'),
				_Utils_Tuple2('rain', '#1f77b4'),
				_Utils_Tuple2('snow', '#9467bd')
			]));
	var path = 'datasets/';
	var encScatter = A2(
		$elm$core$Basics$composeL,
		A2(
			$elm$core$Basics$composeL,
			$gicentre$elm_vegalite$VegaLite$encoding,
			A2(
				$gicentre$elm_vegalite$VegaLite$position,
				$gicentre$elm_vegalite$VegaLite$X,
				_List_fromArray(
					[
						$gicentre$elm_vegalite$VegaLite$pRepeat($gicentre$elm_vegalite$VegaLite$arColumn),
						$gicentre$elm_vegalite$VegaLite$pQuant
					]))),
		A2(
			$gicentre$elm_vegalite$VegaLite$position,
			$gicentre$elm_vegalite$VegaLite$Y,
			_List_fromArray(
				[
					$gicentre$elm_vegalite$VegaLite$pRepeat($gicentre$elm_vegalite$VegaLite$arRow),
					$gicentre$elm_vegalite$VegaLite$pQuant
				])));
	var specScatter = $gicentre$elm_vegalite$VegaLite$asSpec(
		_List_fromArray(
			[
				A2($gicentre$elm_vegalite$VegaLite$dataFromUrl, path + 'seattle-weather.csv', _List_Nil),
				encScatter(_List_Nil),
				$gicentre$elm_vegalite$VegaLite$point(_List_Nil)
			]));
	var encRep = A2(
		$elm$core$Basics$composeL,
		A2(
			$elm$core$Basics$composeL,
			$gicentre$elm_vegalite$VegaLite$encoding,
			A2(
				$gicentre$elm_vegalite$VegaLite$position,
				$gicentre$elm_vegalite$VegaLite$X,
				_List_fromArray(
					[
						$gicentre$elm_vegalite$VegaLite$pName('date'),
						$gicentre$elm_vegalite$VegaLite$pOrdinal,
						$gicentre$elm_vegalite$VegaLite$pTimeUnit($gicentre$elm_vegalite$VegaLite$month)
					]))),
		A2(
			$gicentre$elm_vegalite$VegaLite$position,
			$gicentre$elm_vegalite$VegaLite$Y,
			_List_fromArray(
				[
					$gicentre$elm_vegalite$VegaLite$pRepeat($gicentre$elm_vegalite$VegaLite$arRow),
					$gicentre$elm_vegalite$VegaLite$pAggregate($gicentre$elm_vegalite$VegaLite$opMean)
				])));
	var spec = $gicentre$elm_vegalite$VegaLite$asSpec(
		_List_fromArray(
			[
				A2($gicentre$elm_vegalite$VegaLite$dataFromUrl, path + 'seattle-weather.csv', _List_Nil),
				encRep(_List_Nil),
				$gicentre$elm_vegalite$VegaLite$bar(_List_Nil)
			]));
	var enc = A2(
		$elm$core$Basics$composeL,
		A2(
			$elm$core$Basics$composeL,
			$gicentre$elm_vegalite$VegaLite$encoding,
			A2(
				$gicentre$elm_vegalite$VegaLite$position,
				$gicentre$elm_vegalite$VegaLite$X,
				_List_fromArray(
					[
						$gicentre$elm_vegalite$VegaLite$pName('maxDate'),
						$gicentre$elm_vegalite$VegaLite$pOrdinal
					]))),
		A2(
			$gicentre$elm_vegalite$VegaLite$position,
			$gicentre$elm_vegalite$VegaLite$Y,
			_List_fromArray(
				[
					$gicentre$elm_vegalite$VegaLite$pAggregate($gicentre$elm_vegalite$VegaLite$opCount)
				])));
	var bar2Enc = A2(
		$elm$core$Basics$composeL,
		A2(
			$elm$core$Basics$composeL,
			$gicentre$elm_vegalite$VegaLite$encoding,
			A2(
				$gicentre$elm_vegalite$VegaLite$position,
				$gicentre$elm_vegalite$VegaLite$X,
				_List_fromArray(
					[
						$gicentre$elm_vegalite$VegaLite$pName('date'),
						$gicentre$elm_vegalite$VegaLite$pOrdinal,
						$gicentre$elm_vegalite$VegaLite$pTimeUnit($gicentre$elm_vegalite$VegaLite$month)
					]))),
		A2(
			$gicentre$elm_vegalite$VegaLite$position,
			$gicentre$elm_vegalite$VegaLite$Y,
			_List_fromArray(
				[
					$gicentre$elm_vegalite$VegaLite$pName('temp_max'),
					$gicentre$elm_vegalite$VegaLite$pAggregate($gicentre$elm_vegalite$VegaLite$opMean)
				])));
	var bar1Enc = A2(
		$elm$core$Basics$composeL,
		A2(
			$elm$core$Basics$composeL,
			$gicentre$elm_vegalite$VegaLite$encoding,
			A2(
				$gicentre$elm_vegalite$VegaLite$position,
				$gicentre$elm_vegalite$VegaLite$X,
				_List_fromArray(
					[
						$gicentre$elm_vegalite$VegaLite$pName('date'),
						$gicentre$elm_vegalite$VegaLite$pOrdinal,
						$gicentre$elm_vegalite$VegaLite$pTimeUnit($gicentre$elm_vegalite$VegaLite$month)
					]))),
		A2(
			$gicentre$elm_vegalite$VegaLite$position,
			$gicentre$elm_vegalite$VegaLite$Y,
			_List_fromArray(
				[
					$gicentre$elm_vegalite$VegaLite$pName('precipitation'),
					$gicentre$elm_vegalite$VegaLite$pAggregate($gicentre$elm_vegalite$VegaLite$opMean)
				])));
	return $gicentre$elm_vegalite$VegaLite$toVegaLite(
		_List_fromArray(
			[
				A2($gicentre$elm_vegalite$VegaLite$title, 'aaa!', _List_Nil),
				$gicentre$elm_vegalite$VegaLite$repeat(
				_List_fromArray(
					[
						$gicentre$elm_vegalite$VegaLite$rowFields(
						_List_fromArray(
							['temp_max', 'precipitation', 'wind'])),
						$gicentre$elm_vegalite$VegaLite$columnFields(
						_List_fromArray(
							['wind', 'precipitation', 'temp_max']))
					])),
				$gicentre$elm_vegalite$VegaLite$specification(specScatter)
			]));
}();
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$core$Platform$worker = _Platform_worker;
var $author$project$HelloWorld$main = $elm$core$Platform$worker(
	{
		init: $elm$core$Basics$always(
			_Utils_Tuple2(
				$author$project$HelloWorld$myVis,
				$author$project$HelloWorld$elmToJS($author$project$HelloWorld$myVis))),
		subscriptions: $elm$core$Basics$always($elm$core$Platform$Sub$none),
		update: F2(
			function (_v0, model) {
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			})
	});
_Platform_export({'HelloWorld':{'init':$author$project$HelloWorld$main(
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));