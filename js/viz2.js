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




var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


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

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
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

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
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


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
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
	if (region.I.z === region.N.z)
	{
		return 'on line ' + region.I.z;
	}
	return 'on lines ' + region.I.z + ' through ' + region.N.z;
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

	/**_UNUSED/
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

	/**/
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

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
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

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


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



/**_UNUSED/
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

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

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
		impl.au,
		impl.aC,
		impl.aA,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
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


function _Platform_export(exports)
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


function _Platform_export_UNUSED(exports)
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
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$LT = 0;
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
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
			if (t.$ === -2) {
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
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $author$project$HelloWorld$elmToJS = _Platform_outgoingPort('elmToJS', $elm$core$Basics$identity);
var $gicentre$elm_vegalite$VegaLite$X = 0;
var $gicentre$elm_vegalite$VegaLite$Y = 1;
var $elm$core$Basics$append = _Utils_append;
var $gicentre$elm_vegalite$VegaLite$Bar = 2;
var $gicentre$elm_vegalite$VegaLite$VLMark = 12;
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
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $gicentre$elm_vegalite$VegaLite$markLabel = function (m) {
	switch (m) {
		case 0:
			return 'arc';
		case 1:
			return 'area';
		case 2:
			return 'bar';
		case 3:
			return 'boxplot';
		case 6:
			return 'circle';
		case 4:
			return 'errorband';
		case 5:
			return 'errorbar';
		case 8:
			return 'image';
		case 9:
			return 'line';
		case 7:
			return 'geoshape';
		case 10:
			return 'point';
		case 11:
			return 'rect';
		case 12:
			return 'rule';
		case 13:
			return 'square';
		case 14:
			return 'text';
		case 15:
			return 'tick';
		default:
			return 'trail';
	}
};
var $gicentre$elm_vegalite$VegaLite$ArAria = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Basics$False = 1;
var $gicentre$elm_vegalite$VegaLite$TTNone = 2;
var $elm$core$Basics$True = 0;
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
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
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
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
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
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
		return {$: 0, a: a, b: b, c: c, d: d};
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
	return {$: 1, a: a};
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
	return {$: 0, a: a};
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
		if (!builder.a) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.c),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.c);
		} else {
			var treeLen = builder.a * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.d) : builder.d;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.a);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.c) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.c);
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
					{d: nodeList, a: (len / $elm$core$Array$branchFactor) | 0, c: tail});
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
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$json$Json$Encode$string = _Json_wrap;
var $gicentre$elm_vegalite$VegaLite$ariaProperty = function (arProp) {
	if (!arProp.$) {
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
	switch (bm) {
		case 0:
			return $elm$json$Json$Encode$null;
		case 1:
			return $elm$json$Json$Encode$string('multiply');
		case 2:
			return $elm$json$Json$Encode$string('screen');
		case 3:
			return $elm$json$Json$Encode$string('overlay');
		case 4:
			return $elm$json$Json$Encode$string('darken');
		case 5:
			return $elm$json$Json$Encode$string('lighten');
		case 6:
			return $elm$json$Json$Encode$string('color-dodge');
		case 7:
			return $elm$json$Json$Encode$string('color-burn');
		case 8:
			return $elm$json$Json$Encode$string('hard-light');
		case 9:
			return $elm$json$Json$Encode$string('soft-light');
		case 10:
			return $elm$json$Json$Encode$string('difference');
		case 11:
			return $elm$json$Json$Encode$string('exclusion');
		case 12:
			return $elm$json$Json$Encode$string('hue');
		case 13:
			return $elm$json$Json$Encode$string('saturation');
		case 14:
			return $elm$json$Json$Encode$string('color');
		default:
			return $elm$json$Json$Encode$string('luminosity');
	}
};
var $gicentre$elm_vegalite$VegaLite$colorGradientLabel = function (gr) {
	if (!gr) {
		return 'linear';
	} else {
		return 'radial';
	}
};
var $gicentre$elm_vegalite$VegaLite$cursorLabel = function (cur) {
	switch (cur) {
		case 0:
			return 'auto';
		case 1:
			return 'default';
		case 2:
			return 'none';
		case 3:
			return 'context-menu';
		case 4:
			return 'help';
		case 5:
			return 'pointer';
		case 6:
			return 'progress';
		case 7:
			return 'wait';
		case 8:
			return 'cell';
		case 9:
			return 'crosshair';
		case 10:
			return 'text';
		case 11:
			return 'vertical-text';
		case 12:
			return 'alias';
		case 13:
			return 'copy';
		case 14:
			return 'move';
		case 15:
			return 'no-drop';
		case 16:
			return 'not-allowed';
		case 17:
			return 'all-scroll';
		case 18:
			return 'col-resize';
		case 19:
			return 'row-resize';
		case 20:
			return 'n-resize';
		case 21:
			return 'e-resize';
		case 22:
			return 's-resize';
		case 23:
			return 'w-resize';
		case 24:
			return 'ne-resize';
		case 25:
			return 'nw-resize';
		case 26:
			return 'se-resize';
		case 27:
			return 'sw-resize';
		case 28:
			return 'ew-resize';
		case 29:
			return 'ns-resize';
		case 30:
			return 'nesw-resize';
		case 31:
			return 'nwse-resize';
		case 32:
			return 'zoom-in';
		case 33:
			return 'zoom-out';
		case 34:
			return 'grab';
		default:
			return 'grabbing';
	}
};
var $elm$json$Json$Encode$float = _Json_wrap;
var $gicentre$elm_vegalite$VegaLite$extentSpec = function (ext) {
	switch (ext.$) {
		case 0:
			return $elm$json$Json$Encode$string('ci');
		case 1:
			return $elm$json$Json$Encode$string('stderr');
		case 2:
			return $elm$json$Json$Encode$string('stdev');
		case 3:
			return $elm$json$Json$Encode$string('iqr');
		case 4:
			return $elm$json$Json$Encode$string('min-max');
		default:
			var sc = ext.a;
			return $elm$json$Json$Encode$float(sc);
	}
};
var $gicentre$elm_vegalite$VegaLite$fontWeightSpec = function (w) {
	switch (w) {
		case 3:
			return $elm$json$Json$Encode$string('normal');
		case 0:
			return $elm$json$Json$Encode$string('bold');
		case 1:
			return $elm$json$Json$Encode$string('bolder');
		case 2:
			return $elm$json$Json$Encode$string('lighter');
		case 4:
			return $elm$json$Json$Encode$float(100);
		case 5:
			return $elm$json$Json$Encode$float(200);
		case 6:
			return $elm$json$Json$Encode$float(300);
		case 7:
			return $elm$json$Json$Encode$float(400);
		case 8:
			return $elm$json$Json$Encode$float(500);
		case 9:
			return $elm$json$Json$Encode$float(600);
		case 10:
			return $elm$json$Json$Encode$float(700);
		case 11:
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
				_Json_emptyArray(0),
				entries));
	});
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
			_Json_emptyObject(0),
			pairs));
};
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
		case 0:
			var x = gp.a;
			return _Utils_Tuple2(
				'x1',
				$elm$json$Json$Encode$float(x));
		case 1:
			var x = gp.a;
			return _Utils_Tuple2(
				'y1',
				$elm$json$Json$Encode$float(x));
		case 2:
			var x = gp.a;
			return _Utils_Tuple2(
				'x2',
				$elm$json$Json$Encode$float(x));
		case 3:
			var x = gp.a;
			return _Utils_Tuple2(
				'y2',
				$elm$json$Json$Encode$float(x));
		case 4:
			var x = gp.a;
			return _Utils_Tuple2(
				'r1',
				$elm$json$Json$Encode$float(x));
		case 5:
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
	switch (al) {
		case 1:
			return 'left';
		case 0:
			return 'center';
		default:
			return 'right';
	}
};
var $gicentre$elm_vegalite$VegaLite$markInterpolationLabel = function (interp) {
	switch (interp) {
		case 7:
			return 'linear';
		case 8:
			return 'linear-closed';
		case 12:
			return 'step';
		case 11:
			return 'step-before';
		case 10:
			return 'step-after';
		case 0:
			return 'basis';
		case 2:
			return 'basis-open';
		case 1:
			return 'basis-closed';
		case 4:
			return 'cardinal';
		case 6:
			return 'cardinal-open';
		case 5:
			return 'cardinal-closed';
		case 3:
			return 'bundle';
		default:
			return 'monotone';
	}
};
var $gicentre$elm_vegalite$VegaLite$markOrientationLabel = function (orient) {
	if (!orient) {
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
	switch (cap) {
		case 0:
			return 'butt';
		case 1:
			return 'round';
		default:
			return 'square';
	}
};
var $gicentre$elm_vegalite$VegaLite$strokeJoinLabel = function (jn) {
	switch (jn) {
		case 0:
			return 'miter';
		case 1:
			return 'round';
		default:
			return 'bevel';
	}
};
var $gicentre$elm_vegalite$VegaLite$symbolLabel = function (sym) {
	switch (sym.$) {
		case 0:
			return 'circle';
		case 1:
			return 'square';
		case 2:
			return 'cross';
		case 3:
			return 'diamond';
		case 4:
			return 'triangle-up';
		case 5:
			return 'triangle-down';
		case 6:
			return 'triangle-left';
		case 7:
			return 'triangle-right';
		case 12:
			return 'triangle';
		case 9:
			return 'stroke';
		case 10:
			return 'arrow';
		case 11:
			return 'wedge';
		default:
			var svgPath = sym.a;
			return svgPath;
	}
};
var $gicentre$elm_vegalite$VegaLite$textDirectionLabel = function (td) {
	if (!td) {
		return 'ltr';
	} else {
		return 'rtl';
	}
};
var $elm$core$String$trim = _String_trim;
var $gicentre$elm_vegalite$VegaLite$ttContentLabel = function (ttContent) {
	switch (ttContent) {
		case 0:
			return 'encoding';
		case 1:
			return 'data';
		default:
			return 'null';
	}
};
var $gicentre$elm_vegalite$VegaLite$vAlignLabel = function (al) {
	switch (al) {
		case 0:
			return 'top';
		case 1:
			return 'line-top';
		case 2:
			return 'middle';
		case 3:
			return 'bottom';
		case 4:
			return 'line-bottom';
		default:
			return 'alphabetic';
	}
};
var $gicentre$elm_vegalite$VegaLite$lineMarkerSpec = function (pm) {
	if (!pm.$) {
		return $elm$json$Json$Encode$bool(false);
	} else {
		var mps = pm.a;
		return $elm$json$Json$Encode$object(
			A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, mps));
	}
};
var $gicentre$elm_vegalite$VegaLite$markProperty = function (mProp) {
	switch (mProp.$) {
		case 2:
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
		case 30:
			var b = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'filled',
					$elm$json$Json$Encode$bool(b))
				]);
		case 6:
			var bm = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'blend',
					$gicentre$elm_vegalite$VegaLite$blendModeSpec(bm))
				]);
		case 9:
			var b = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'clip',
					$elm$json$Json$Encode$bool(b))
				]);
		case 10:
			var col = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'color',
					$elm$json$Json$Encode$string(col))
				]);
		case 12:
			var r = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadius',
					$elm$json$Json$Encode$float(r))
				]);
		case 13:
			var r = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadiusEnd',
					$elm$json$Json$Encode$float(r))
				]);
		case 16:
			var r = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadiusBottomLeft',
					$elm$json$Json$Encode$float(r))
				]);
		case 17:
			var r = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadiusBottomRight',
					$elm$json$Json$Encode$float(r))
				]);
		case 14:
			var r = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadiusTopLeft',
					$elm$json$Json$Encode$float(r))
				]);
		case 15:
			var r = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadiusTopRight',
					$elm$json$Json$Encode$float(r))
				]);
		case 18:
			var cur = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cursor',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$cursorLabel(cur)))
				]);
		case 27:
			var ext = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'extent',
					$gicentre$elm_vegalite$VegaLite$extentSpec(ext))
				]);
		case 19:
			var s = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'href',
					$elm$json$Json$Encode$string(s))
				]);
		case 48:
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
		case 28:
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
		case 29:
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
		case 11:
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
		case 54:
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
		case 53:
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
		case 55:
			var sc = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeCap',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$strokeCapLabel(sc)))
				]);
		case 58:
			var sj = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeJoin',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$strokeJoinLabel(sj)))
				]);
		case 59:
			var ml = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeMiterLimit',
					$elm$json$Json$Encode$float(ml))
				]);
		case 41:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'opacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 31:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fillOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 60:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 61:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 56:
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
		case 57:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeDashOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 62:
			var styles = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'style',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styles))
				]);
		case 37:
			var interp = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'interpolate',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$markInterpolationLabel(interp)))
				]);
		case 63:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tension',
					$elm$json$Json$Encode$float(x))
				]);
		case 45:
			var orient = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'orient',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$markOrientationLabel(orient)))
				]);
		case 50:
			var sym = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'shape',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$symbolLabel(sym)))
				]);
		case 52:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'size',
					$elm$json$Json$Encode$float(x))
				]);
		case 1:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'angle',
					$elm$json$Json$Encode$float(x))
				]);
		case 0:
			var al = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'align',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(al)))
				]);
		case 4:
			var va = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'baseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 25:
			var dx = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'dx',
					$elm$json$Json$Encode$float(dx))
				]);
		case 26:
			var dy = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'dy',
					$elm$json$Json$Encode$float(dy))
				]);
		case 32:
			var fnt = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'font',
					$elm$json$Json$Encode$string(fnt))
				]);
		case 33:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fontSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 34:
			var fSty = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fontStyle',
					$elm$json$Json$Encode$string(fSty))
				]);
		case 35:
			var w = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fontWeight',
					$gicentre$elm_vegalite$VegaLite$fontWeightSpec(w))
				]);
		case 47:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'radius',
					$elm$json$Json$Encode$float(x))
				]);
		case 36:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'innerRadius',
					$elm$json$Json$Encode$float(x))
				]);
		case 42:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'outerRadius',
					$elm$json$Json$Encode$float(x))
				]);
		case 64:
			var txt = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'text',
					$gicentre$elm_vegalite$VegaLite$multilineTextSpec(txt))
				]);
		case 39:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'lineHeight',
					$elm$json$Json$Encode$float(x))
				]);
		case 21:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'limit',
					$elm$json$Json$Encode$float(x))
				]);
		case 22:
			var s = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'ellipsis',
					$elm$json$Json$Encode$string(s))
				]);
		case 23:
			var td = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'dir',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$textDirectionLabel(td)))
				]);
		case 65:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'theta',
					$elm$json$Json$Encode$float(x))
				]);
		case 66:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'theta2',
					$elm$json$Json$Encode$float(x))
				]);
		case 80:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'thetaOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 81:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'theta2Offset',
					$elm$json$Json$Encode$float(x))
				]);
		case 5:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'binSpacing',
					$elm$json$Json$Encode$float(x))
				]);
		case 20:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'continuousBandSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 24:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'discreteBandSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 51:
			var b = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'shortTimeLabels',
					$elm$json$Json$Encode$bool(b))
				]);
		case 3:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'bandSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 67:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'thickness',
					$elm$json$Json$Encode$float(x))
				]);
		case 49:
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
		case 7:
			var props = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'borders',
					$elm$json$Json$Encode$object(
						A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, props)))
				]);
		case 40:
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
		case 8:
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
		case 43:
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
		case 68:
			var props = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'ticks',
					$elm$json$Json$Encode$object(
						A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markProperty, props)))
				]);
		case 69:
			var ttContent = mProp.a;
			return (ttContent === 2) ? _List_fromArray(
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
		case 46:
			var pm = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'point',
					$gicentre$elm_vegalite$VegaLite$pointMarkerSpec(pm))
				]);
		case 38:
			var lm = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'line',
					$gicentre$elm_vegalite$VegaLite$lineMarkerSpec(lm))
				]);
		case 70:
			var w = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'width',
					$elm$json$Json$Encode$float(w))
				]);
		case 71:
			var h = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'height',
					$elm$json$Json$Encode$float(h))
				]);
		case 72:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'x',
					$elm$json$Json$Encode$float(x))
				]);
		case 73:
			var y = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'y',
					$elm$json$Json$Encode$float(y))
				]);
		case 74:
			var x = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'x2',
					$elm$json$Json$Encode$float(x))
				]);
		case 75:
			var y = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'y2',
					$elm$json$Json$Encode$float(y))
				]);
		case 44:
			var b = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'order',
					$elm$json$Json$Encode$bool(b))
				]);
		case 76:
			var o = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'xOffset',
					$elm$json$Json$Encode$float(o))
				]);
		case 78:
			var o = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'x2Offset',
					$elm$json$Json$Encode$float(o))
				]);
		case 77:
			var o = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'yOffset',
					$elm$json$Json$Encode$float(o))
				]);
		case 79:
			var o = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'y2Offset',
					$elm$json$Json$Encode$float(o))
				]);
		case 82:
			var o = mProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'radiusOffset',
					$elm$json$Json$Encode$float(o))
				]);
		case 83:
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
		case 0:
			return $elm$json$Json$Encode$string('transparent');
		case 1:
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
				12,
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$markLabel(m)));
		} else {
			return _Utils_Tuple2(
				12,
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
var $gicentre$elm_vegalite$VegaLite$bar = $gicentre$elm_vegalite$VegaLite$mark(2);
var $gicentre$elm_vegalite$VegaLite$ChY = 1;
var $gicentre$elm_vegalite$VegaLite$chY = 1;
var $gicentre$elm_vegalite$VegaLite$arrangementLabel = function (arrng) {
	switch (arrng) {
		case 1:
			return 'row';
		case 0:
			return 'column';
		case 2:
			return 'repeat';
		default:
			return 'layer';
	}
};
var $elm$json$Json$Encode$int = _Json_wrap;
var $gicentre$elm_vegalite$VegaLite$binProperty = function (binProp) {
	switch (binProp.$) {
		case 5:
			var n = binProp.a;
			return _Utils_Tuple2(
				'maxbins',
				$elm$json$Json$Encode$int(n));
		case 0:
			var x = binProp.a;
			return _Utils_Tuple2(
				'anchor',
				$elm$json$Json$Encode$float(x));
		case 1:
			var x = binProp.a;
			return _Utils_Tuple2(
				'base',
				$elm$json$Json$Encode$float(x));
		case 8:
			var x = binProp.a;
			return _Utils_Tuple2(
				'step',
				$elm$json$Json$Encode$float(x));
		case 9:
			var xs = binProp.a;
			return _Utils_Tuple2(
				'steps',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs));
		case 6:
			var x = binProp.a;
			return _Utils_Tuple2(
				'minstep',
				$elm$json$Json$Encode$float(x));
		case 2:
			var xs = binProp.a;
			return _Utils_Tuple2(
				'divide',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs));
		case 3:
			var mn = binProp.a;
			var mx = binProp.b;
			return _Utils_Tuple2(
				'extent',
				A2(
					$elm$json$Json$Encode$list,
					$elm$json$Json$Encode$float,
					_List_fromArray(
						[mn, mx])));
		case 4:
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
	switch (dayName) {
		case 0:
			return 'Mon';
		case 1:
			return 'Tue';
		case 2:
			return 'Wed';
		case 3:
			return 'Thu';
		case 4:
			return 'Fri';
		case 5:
			return 'Sat';
		default:
			return 'Sun';
	}
};
var $gicentre$elm_vegalite$VegaLite$monthNameLabel = function (mon) {
	switch (mon) {
		case 0:
			return 'Jan';
		case 1:
			return 'Feb';
		case 2:
			return 'Mar';
		case 3:
			return 'Apr';
		case 4:
			return 'May';
		case 5:
			return 'Jun';
		case 6:
			return 'Jul';
		case 7:
			return 'Aug';
		case 8:
			return 'Sep';
		case 9:
			return 'Oct';
		case 10:
			return 'Nov';
		default:
			return 'Dec';
	}
};
var $gicentre$elm_vegalite$VegaLite$dateTimeProperty = function (dtp) {
	switch (dtp.$) {
		case 0:
			var y = dtp.a;
			return _Utils_Tuple2(
				'year',
				$elm$json$Json$Encode$int(y));
		case 1:
			var q = dtp.a;
			return _Utils_Tuple2(
				'quarter',
				$elm$json$Json$Encode$int(q));
		case 2:
			var mon = dtp.a;
			return _Utils_Tuple2(
				'month',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$monthNameLabel(mon)));
		case 3:
			var n = dtp.a;
			return _Utils_Tuple2(
				'month',
				$elm$json$Json$Encode$int(n));
		case 4:
			var d = dtp.a;
			return _Utils_Tuple2(
				'date',
				$elm$json$Json$Encode$int(d));
		case 5:
			var d = dtp.a;
			return _Utils_Tuple2(
				'day',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$dayLabel(d)));
		case 6:
			var h = dtp.a;
			return _Utils_Tuple2(
				'hours',
				$elm$json$Json$Encode$int(h));
		case 7:
			var m = dtp.a;
			return _Utils_Tuple2(
				'minutes',
				$elm$json$Json$Encode$int(m));
		case 8:
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
		case 2:
			var x = val.a;
			return $elm$json$Json$Encode$float(x);
		case 3:
			var s = val.a;
			return $elm$json$Json$Encode$string(s);
		case 0:
			var b = val.a;
			return $elm$json$Json$Encode$bool(b);
		case 1:
			var d = val.a;
			return $elm$json$Json$Encode$object(
				A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d));
		default:
			return $elm$json$Json$Encode$null;
	}
};
var $gicentre$elm_vegalite$VegaLite$dataValuesSpecs = function (dvs) {
	switch (dvs.$) {
		case 2:
			var xs = dvs.a;
			return A2($elm$core$List$map, $elm$json$Json$Encode$float, xs);
		case 3:
			var ss = dvs.a;
			return A2($elm$core$List$map, $elm$json$Json$Encode$string, ss);
		case 1:
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
		case 0:
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
		case 1:
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
		case 2:
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
		case 3:
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
		case 4:
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
		case 7:
			var selName = f.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'selection',
					$elm$json$Json$Encode$string(selName))
				]);
		case 9:
			var field = f.a;
			var vals = f.b;
			var values = function () {
				if (!vals.$) {
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
		case 8:
			var field = f.a;
			var vals = f.b;
			var values = function () {
				switch (vals.$) {
					case 2:
						var xs = vals.a;
						return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs);
					case 1:
						var ds = vals.a;
						return A2(
							$elm$json$Json$Encode$list,
							function (d) {
								return $elm$json$Json$Encode$object(
									A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d));
							},
							ds);
					case 3:
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
		case 10:
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
	switch (ca) {
		case 0:
			return 'none';
		case 1:
			return 'each';
		default:
			return 'all';
	}
};
var $gicentre$elm_vegalite$VegaLite$legendOrientLabel = function (orient) {
	switch (orient) {
		case 3:
			return 'left';
		case 7:
			return 'top-left';
		case 6:
			return 'top';
		case 8:
			return 'top-right';
		case 5:
			return 'right';
		case 2:
			return 'bottom-right';
		case 0:
			return 'bottom';
		case 1:
			return 'bottom-left';
		default:
			return 'none';
	}
};
var $gicentre$elm_vegalite$VegaLite$overlapStrategySpec = function (strat) {
	switch (strat) {
		case 0:
			return $elm$json$Json$Encode$bool(false);
		case 1:
			return $elm$json$Json$Encode$string('parity');
		default:
			return $elm$json$Json$Encode$string('greedy');
	}
};
var $gicentre$elm_vegalite$VegaLite$legendProperty = function (legendProp) {
	switch (legendProp.$) {
		case 0:
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
		case 1:
			var h = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'clipHeight',
					$elm$json$Json$Encode$float(h))
				]);
		case 2:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'columnPadding',
					$elm$json$Json$Encode$float(n))
				]);
		case 28:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'rowPadding',
					$elm$json$Json$Encode$float(n))
				]);
		case 3:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'columns',
					$elm$json$Json$Encode$float(n))
				]);
		case 4:
			var r = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'cornerRadius',
					$elm$json$Json$Encode$float(r))
				]);
		case 6:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fillColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 5:
			var d = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'direction',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$markOrientationLabel(d)))
				]);
		case 47:
			var lType = legendProp.a;
			if (!lType) {
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
		case 7:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'format',
					$elm$json$Json$Encode$string(s))
				]);
		case 8:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'formatType',
					$elm$json$Json$Encode$string('number'))
				]);
		case 9:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'formatType',
					$elm$json$Json$Encode$string('time'))
				]);
		case 10:
			var formatter = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'formatType',
					$elm$json$Json$Encode$string(formatter))
				]);
		case 11:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientLength',
					$elm$json$Json$Encode$float(n))
				]);
		case 12:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientThickness',
					$elm$json$Json$Encode$float(n))
				]);
		case 13:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientStrokeColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 14:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gradientStrokeWidth',
					$elm$json$Json$Encode$float(n))
				]);
		case 15:
			var ga = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$compositionAlignmentLabel(ga)))
				]);
		case 16:
			var ha = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(ha)))
				]);
		case 17:
			var va = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelBaseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 18:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 19:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFont',
					$elm$json$Json$Encode$string(s))
				]);
		case 20:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFontSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 21:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelLimit',
					$elm$json$Json$Encode$float(x))
				]);
		case 22:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 23:
			var lo = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOverlap',
					$gicentre$elm_vegalite$VegaLite$overlapStrategySpec(lo))
				]);
		case 24:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'offset',
					$elm$json$Json$Encode$float(x))
				]);
		case 25:
			var orient = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'orient',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$legendOrientLabel(orient)))
				]);
		case 27:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'padding',
					$elm$json$Json$Encode$float(x))
				]);
		case 29:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 30:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'strokeWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 31:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolFillColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 32:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolLimit',
					$elm$json$Json$Encode$int(n))
				]);
		case 35:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolStrokeColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 36:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolType',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$symbolLabel(s)))
				]);
		case 33:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 34:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'symbolStrokeWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 37:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickCount',
					$elm$json$Json$Encode$float(x))
				]);
		case 38:
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
		case 39:
			var ha = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(ha)))
				]);
		case 40:
			var va = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleBaseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 41:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 42:
			var s = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFont',
					$elm$json$Json$Encode$string(s))
				]);
		case 43:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 44:
			var fw = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontWeight',
					$gicentre$elm_vegalite$VegaLite$fontWeightSpec(fw))
				]);
		case 45:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleLimit',
					$elm$json$Json$Encode$float(x))
				]);
		case 26:
			var orient = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleOrient',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$legendOrientLabel(orient)))
				]);
		case 46:
			var x = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titlePadding',
					$elm$json$Json$Encode$float(x))
				]);
		case 48:
			var vals = legendProp.a;
			var list = function () {
				switch (vals.$) {
					case 1:
						var xs = vals.a;
						return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs);
					case 0:
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
		case 49:
			var n = legendProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'legendX',
					$elm$json$Json$Encode$float(n))
				]);
		case 50:
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
	switch (mType) {
		case 0:
			return 'nominal';
		case 1:
			return 'ordinal';
		case 2:
			return 'quantitative';
		case 3:
			return 'temporal';
		default:
			return 'geojson';
	}
};
var $elm$core$String$length = _String_length;
var $gicentre$elm_vegalite$VegaLite$operationSpec = function (op) {
	switch (op.$) {
		case 0:
			var maybeField = op.a;
			if (maybeField.$ === 1) {
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
		case 1:
			var maybeField = op.a;
			if (maybeField.$ === 1) {
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
		case 4:
			return $elm$json$Json$Encode$string('count');
		case 2:
			return $elm$json$Json$Encode$string('ci0');
		case 3:
			return $elm$json$Json$Encode$string('ci1');
		case 5:
			return $elm$json$Json$Encode$string('distinct');
		case 6:
			return $elm$json$Json$Encode$string('max');
		case 7:
			return $elm$json$Json$Encode$string('mean');
		case 8:
			return $elm$json$Json$Encode$string('median');
		case 9:
			return $elm$json$Json$Encode$string('min');
		case 10:
			return $elm$json$Json$Encode$string('missing');
		case 11:
			return $elm$json$Json$Encode$string('product');
		case 12:
			return $elm$json$Json$Encode$string('q1');
		case 13:
			return $elm$json$Json$Encode$string('q3');
		case 15:
			return $elm$json$Json$Encode$string('stdev');
		case 16:
			return $elm$json$Json$Encode$string('stdevp');
		case 17:
			return $elm$json$Json$Encode$string('sum');
		case 14:
			return $elm$json$Json$Encode$string('stderr');
		case 18:
			return $elm$json$Json$Encode$string('valid');
		case 19:
			return $elm$json$Json$Encode$string('variance');
		default:
			return $elm$json$Json$Encode$string('variancep');
	}
};
var $gicentre$elm_vegalite$VegaLite$cInterpolateSpec = function (iType) {
	switch (iType.$) {
		case 7:
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
		case 4:
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('hsl'))
					]));
		case 5:
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('hsl-long'))
					]));
		case 6:
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('lab'))
					]));
		case 2:
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('hcl'))
					]));
		case 3:
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('hcl-long'))
					]));
		case 0:
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
	switch (ch) {
		case 0:
			return 'x';
		case 1:
			return 'y';
		case 2:
			return 'x2';
		case 3:
			return 'y2';
		case 4:
			return 'color';
		case 5:
			return 'opacity';
		case 6:
			return 'shape';
		case 7:
			return 'size';
		default:
			return 'strokeDash';
	}
};
var $gicentre$elm_vegalite$VegaLite$scaleDomainSpec = function (sdType) {
	switch (sdType.$) {
		case 0:
			var ns = sdType.a;
			return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, ns);
		case 1:
			var x = sdType.a;
			return $elm$json$Json$Encode$float(x);
		case 2:
			var x = sdType.a;
			return $elm$json$Json$Encode$float(x);
		case 3:
			var x = sdType.a;
			return $elm$json$Json$Encode$float(x);
		case 7:
			var ds = sdType.a;
			return A2(
				$elm$json$Json$Encode$list,
				function (d) {
					return $elm$json$Json$Encode$object(
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d));
				},
				ds);
		case 4:
			var d = sdType.a;
			return $elm$json$Json$Encode$object(
				A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d));
		case 5:
			var d = sdType.a;
			return $elm$json$Json$Encode$object(
				A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d));
		case 6:
			var cats = sdType.a;
			return A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, cats);
		case 8:
			var selName = sdType.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'selection',
						$elm$json$Json$Encode$string(selName))
					]));
		case 10:
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
		case 9:
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
		case 12:
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
	switch (sc) {
		case 0:
			return 'linear';
		case 1:
			return 'pow';
		case 4:
			return 'symlog';
		case 2:
			return 'sqrt';
		case 3:
			return 'log';
		case 5:
			return 'time';
		case 6:
			return 'utc';
		case 7:
			return 'ordinal';
		case 8:
			return 'band';
		case 9:
			return 'point';
		case 10:
			return 'bin-ordinal';
		case 11:
			return 'quantile';
		case 12:
			return 'quantize';
		default:
			return 'threshold';
	}
};
var $gicentre$elm_vegalite$VegaLite$timeUnitLabel = function (tu) {
	switch (tu.$) {
		case 0:
			return 'year';
		case 13:
			return 'yeardayofyear';
		case 1:
			return 'yearquarter';
		case 2:
			return 'yearquartermonth';
		case 3:
			return 'yearmonth';
		case 4:
			return 'yearmonthdate';
		case 5:
			return 'yearmonthdatehours';
		case 6:
			return 'yearmonthdatehoursminutes';
		case 7:
			return 'yearmonthdatehoursminutesseconds';
		case 8:
			return 'yearweek';
		case 9:
			return 'yearweekday';
		case 10:
			return 'yearweekdayhours';
		case 11:
			return 'yearweekdayhoursminutes';
		case 12:
			return 'yearweekdayhoursminutesseconds';
		case 14:
			return 'quarter';
		case 15:
			return 'quartermonth';
		case 16:
			return 'month';
		case 17:
			return 'monthdate';
		case 18:
			return 'monthdatehours';
		case 19:
			return 'monthdatehoursminutes';
		case 20:
			return 'monthdatehoursminutesseconds';
		case 21:
			return 'week';
		case 22:
			return 'weekday';
		case 23:
			return 'weekdayhours';
		case 24:
			return 'weekdayhoursminutes';
		case 25:
			return 'weekdayhoursminutesseconds';
		case 26:
			return 'date';
		case 27:
			return 'day';
		case 28:
			return 'dayofyear';
		case 29:
			return 'dayhours';
		case 30:
			return 'dayhoursminutes';
		case 31:
			return 'dayhoursminutesseconds';
		case 32:
			return 'hours';
		case 33:
			return 'hoursminutes';
		case 34:
			return 'hoursminutesseconds';
		case 35:
			return 'minutes';
		case 36:
			return 'minutesseconds';
		case 37:
			return 'seconds';
		case 38:
			return 'secondsmilliseconds';
		case 39:
			return 'milliseconds';
		case 40:
			return '';
		case 41:
			return '';
		default:
			return '';
	}
};
var $gicentre$elm_vegalite$VegaLite$scaleNiceSpec = function (ni) {
	switch (ni.$) {
		case 0:
			return $elm$json$Json$Encode$string('millisecond');
		case 1:
			return $elm$json$Json$Encode$string('second');
		case 2:
			return $elm$json$Json$Encode$string('minute');
		case 3:
			return $elm$json$Json$Encode$string('hour');
		case 4:
			return $elm$json$Json$Encode$string('day');
		case 5:
			return $elm$json$Json$Encode$string('week');
		case 6:
			return $elm$json$Json$Encode$string('month');
		case 7:
			return $elm$json$Json$Encode$string('year');
		case 10:
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
		case 8:
			return $elm$json$Json$Encode$bool(true);
		case 9:
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
		case 0:
			var sType = scaleProp.a;
			return _Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$scaleLabel(sType)));
		case 1:
			var sdType = scaleProp.a;
			switch (sdType.$) {
				case 1:
					var x = sdType.a;
					return _Utils_Tuple2(
						'domainMin',
						$elm$json$Json$Encode$float(x));
				case 2:
					var x = sdType.a;
					return _Utils_Tuple2(
						'domainMid',
						$elm$json$Json$Encode$float(x));
				case 3:
					var x = sdType.a;
					return _Utils_Tuple2(
						'domainMax',
						$elm$json$Json$Encode$float(x));
				case 4:
					var d = sdType.a;
					return _Utils_Tuple2(
						'domainMin',
						$elm$json$Json$Encode$object(
							A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$dateTimeProperty, d)));
				case 5:
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
		case 2:
			var range = scaleProp.a;
			switch (range.$) {
				case 4:
					var x = range.a;
					return _Utils_Tuple2(
						'rangeMin',
						$elm$json$Json$Encode$float(x));
				case 5:
					var x = range.a;
					return _Utils_Tuple2(
						'rangeMax',
						$elm$json$Json$Encode$float(x));
				case 0:
					var xs = range.a;
					return _Utils_Tuple2(
						'range',
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs));
				case 2:
					var xss = range.a;
					return _Utils_Tuple2(
						'range',
						A2(
							$elm$json$Json$Encode$list,
							$elm$json$Json$Encode$list($elm$json$Json$Encode$float),
							xss));
				case 1:
					var ss = range.a;
					return _Utils_Tuple2(
						'range',
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, ss));
				case 3:
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
		case 3:
			var schName = scaleProp.a;
			var extent = scaleProp.b;
			return A2($gicentre$elm_vegalite$VegaLite$schemeProperty, schName, extent);
		case 4:
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'align',
				$elm$json$Json$Encode$float(x));
		case 5:
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'padding',
				$elm$json$Json$Encode$float(x));
		case 16:
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'base',
				$elm$json$Json$Encode$float(x));
		case 13:
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'exponent',
				$elm$json$Json$Encode$float(x));
		case 14:
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'domainMid',
				$elm$json$Json$Encode$float(x));
		case 15:
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'constant',
				$elm$json$Json$Encode$float(x));
		case 6:
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'paddingInner',
				$elm$json$Json$Encode$float(x));
		case 7:
			var x = scaleProp.a;
			return _Utils_Tuple2(
				'paddingOuter',
				$elm$json$Json$Encode$float(x));
		case 8:
			var b = scaleProp.a;
			return _Utils_Tuple2(
				'round',
				$elm$json$Json$Encode$bool(b));
		case 9:
			var b = scaleProp.a;
			return _Utils_Tuple2(
				'clamp',
				$elm$json$Json$Encode$bool(b));
		case 10:
			var interp = scaleProp.a;
			return _Utils_Tuple2(
				'interpolate',
				$gicentre$elm_vegalite$VegaLite$cInterpolateSpec(interp));
		case 11:
			var ni = scaleProp.a;
			return _Utils_Tuple2(
				'nice',
				$gicentre$elm_vegalite$VegaLite$scaleNiceSpec(ni));
		case 12:
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
		case 0:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'order',
					$elm$json$Json$Encode$string('ascending'))
				]);
		case 1:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'order',
					$elm$json$Json$Encode$string('descending'))
				]);
		case 5:
			var ch = sp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'encoding',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$channelLabel(ch)))
				]);
		case 4:
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
		case 3:
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
		case 40:
			var tu = tUnit.a;
			return A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					'utc',
					$elm$json$Json$Encode$bool(true)),
				$gicentre$elm_vegalite$VegaLite$timeUnitProperties(tu));
		case 41:
			var n = tUnit.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'maxbins',
					$elm$json$Json$Encode$int(n))
				]);
		case 42:
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
		case 0:
			var ex = bo.a;
			return $elm$json$Json$Encode$string(ex);
		case 1:
			var f = bo.a;
			return $gicentre$elm_vegalite$VegaLite$filterSpec(f);
		case 2:
			var tr = bo.a;
			var f = bo.b;
			return A2($gicentre$elm_vegalite$VegaLite$trFilterSpec, tr, f);
		case 4:
			var selName = bo.a;
			return $elm$json$Json$Encode$string(selName);
		case 3:
			var sel = bo.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'selection',
						$elm$json$Json$Encode$string(sel))
					]));
		case 5:
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
		case 6:
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
		case 5:
			var ex = f.a;
			return $elm$json$Json$Encode$string(ex);
		case 6:
			var boolExpr = f.a;
			return $gicentre$elm_vegalite$VegaLite$booleanOpSpec(boolExpr);
		default:
			return $elm$json$Json$Encode$object(
				$gicentre$elm_vegalite$VegaLite$filterProperties(f));
	}
};
var $gicentre$elm_vegalite$VegaLite$markChannelProperties = function (field) {
	switch (field.$) {
		case 0:
			var s = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(s))
				]);
		case 1:
			var d = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'datum',
					$gicentre$elm_vegalite$VegaLite$dataValueSpec(d))
				]);
		case 2:
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
		case 3:
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
		case 4:
			var t = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$measurementLabel(t)))
				]);
		case 5:
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
		case 13:
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
		case 7:
			var bps = field.a;
			return _List_fromArray(
				[
					$gicentre$elm_vegalite$VegaLite$bin(bps)
				]);
		case 6:
			var x = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'band',
					$elm$json$Json$Encode$float(x))
				]);
		case 9:
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
							case 0:
								var _v3 = sps.a;
								return _List_fromArray(
									[
										_Utils_Tuple2(
										'sort',
										$elm$json$Json$Encode$string('ascending'))
									]);
							case 1:
								var _v4 = sps.a;
								return _List_fromArray(
									[
										_Utils_Tuple2(
										'sort',
										$elm$json$Json$Encode$string('descending'))
									]);
							case 2:
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
		case 8:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'bin',
					$elm$json$Json$Encode$string('binned'))
				]);
		case 14:
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
		case 15:
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
		case 10:
			var tu = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'timeUnit',
					$gicentre$elm_vegalite$VegaLite$timeUnitSpec(tu))
				]);
		case 11:
			var t = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'title',
					$gicentre$elm_vegalite$VegaLite$multilineTextSpec(t))
				]);
		case 12:
			var op = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'aggregate',
					$gicentre$elm_vegalite$VegaLite$operationSpec(op))
				]);
		case 16:
			var s = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'value',
					$elm$json$Json$Encode$string(s))
				]);
		case 17:
			var x = field.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'value',
					$elm$json$Json$Encode$float(x))
				]);
		case 18:
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
			case 5:
				var ex = f.a;
				return $elm$json$Json$Encode$string(ex);
			case 6:
				var boolExpr = f.a;
				return $gicentre$elm_vegalite$VegaLite$booleanOpSpec(boolExpr);
			default:
				return $elm$json$Json$Encode$object(
					_Utils_ap(
						$gicentre$elm_vegalite$VegaLite$markChannelProperties(mc),
						$gicentre$elm_vegalite$VegaLite$filterProperties(f)));
		}
	});
var $gicentre$elm_vegalite$VegaLite$color = function (markProps) {
	return $elm$core$List$cons(
		_Utils_Tuple2(
			'color',
			$elm$json$Json$Encode$object(
				A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$markChannelProperties, markProps))));
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $gicentre$elm_vegalite$VegaLite$VLData = 10;
var $gicentre$elm_vegalite$VegaLite$dataTypeLabel = function (dType) {
	switch (dType.$) {
		case 0:
			return 'number';
		case 1:
			return 'boolean';
		case 2:
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
		case 0:
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
		case 1:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('csv'))
				]);
		case 2:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('tsv'))
				]);
		case 3:
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
		case 4:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('arrow'))
				]);
		case 5:
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
		case 6:
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
			10,
			$elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'url',
						$elm$json$Json$Encode$string(u))
					]))) : _Utils_Tuple2(
			10,
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
var $gicentre$elm_vegalite$VegaLite$VLEncoding = 15;
var $gicentre$elm_vegalite$VegaLite$encoding = function (channels) {
	return _Utils_Tuple2(
		15,
		$elm$json$Json$Encode$object(channels));
};
var $gicentre$elm_vegalite$VegaLite$FExpr = function (a) {
	return {$: 5, a: a};
};
var $gicentre$elm_vegalite$VegaLite$fiExpr = $gicentre$elm_vegalite$VegaLite$FExpr;
var $gicentre$elm_vegalite$VegaLite$FSelection = function (a) {
	return {$: 7, a: a};
};
var $gicentre$elm_vegalite$VegaLite$fiSelection = $gicentre$elm_vegalite$VegaLite$FSelection;
var $gicentre$elm_vegalite$VegaLite$filter = function (f) {
	return $elm$core$List$cons(
		_Utils_Tuple2(
			'filter',
			$gicentre$elm_vegalite$VegaLite$filterSpec(f)));
};
var $gicentre$elm_vegalite$VegaLite$VLHeight = 4;
var $gicentre$elm_vegalite$VegaLite$height = function (h) {
	return _Utils_Tuple2(
		4,
		$elm$json$Json$Encode$float(h));
};
var $gicentre$elm_vegalite$VegaLite$IText = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $gicentre$elm_vegalite$VegaLite$iText = function (f) {
	return $gicentre$elm_vegalite$VegaLite$IText(f);
};
var $gicentre$elm_vegalite$VegaLite$MLegend = function (a) {
	return {$: 13, a: a};
};
var $gicentre$elm_vegalite$VegaLite$mLegend = $gicentre$elm_vegalite$VegaLite$MLegend;
var $gicentre$elm_vegalite$VegaLite$MName = function (a) {
	return {$: 0, a: a};
};
var $gicentre$elm_vegalite$VegaLite$mName = $gicentre$elm_vegalite$VegaLite$MName;
var $gicentre$elm_vegalite$VegaLite$Count = {$: 4};
var $gicentre$elm_vegalite$VegaLite$opCount = $gicentre$elm_vegalite$VegaLite$Count;
var $gicentre$elm_vegalite$VegaLite$PAggregate = function (a) {
	return {$: 11, a: a};
};
var $gicentre$elm_vegalite$VegaLite$pAggregate = $gicentre$elm_vegalite$VegaLite$PAggregate;
var $gicentre$elm_vegalite$VegaLite$PName = function (a) {
	return {$: 0, a: a};
};
var $gicentre$elm_vegalite$VegaLite$pName = $gicentre$elm_vegalite$VegaLite$PName;
var $gicentre$elm_vegalite$VegaLite$Ordinal = 1;
var $gicentre$elm_vegalite$VegaLite$PmType = function (a) {
	return {$: 6, a: a};
};
var $gicentre$elm_vegalite$VegaLite$pOrdinal = $gicentre$elm_vegalite$VegaLite$PmType(1);
var $gicentre$elm_vegalite$VegaLite$PSort = function (a) {
	return {$: 14, a: a};
};
var $gicentre$elm_vegalite$VegaLite$pSort = $gicentre$elm_vegalite$VegaLite$PSort;
var $gicentre$elm_vegalite$VegaLite$AxGridColor = function (a) {
	return {$: 69, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxGridDash = function (a) {
	return {$: 70, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxGridDashOffset = function (a) {
	return {$: 71, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxGridOpacity = function (a) {
	return {$: 72, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxGridWidth = function (a) {
	return {$: 73, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelAlign = function (a) {
	return {$: 20, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelBaseline = function (a) {
	return {$: 22, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelColor = function (a) {
	return {$: 24, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelFont = function (a) {
	return {$: 28, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelFontSize = function (a) {
	return {$: 29, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelFontStyle = function (a) {
	return {$: 30, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelFontWeight = function (a) {
	return {$: 31, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelOffset = function (a) {
	return {$: 34, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelOpacity = function (a) {
	return {$: 35, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxLabelPadding = function (a) {
	return {$: 37, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxTickColor = function (a) {
	return {$: 40, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxTickDash = function (a) {
	return {$: 42, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxTickDashOffset = function (a) {
	return {$: 43, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxTickOpacity = function (a) {
	return {$: 46, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxTickSize = function (a) {
	return {$: 49, a: a};
};
var $gicentre$elm_vegalite$VegaLite$AxTickWidth = function (a) {
	return {$: 50, a: a};
};
var $gicentre$elm_vegalite$VegaLite$anchorLabel = function (an) {
	switch (an) {
		case 0:
			return 'start';
		case 1:
			return 'middle';
		default:
			return 'end';
	}
};
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
	switch (side) {
		case 0:
			return 'top';
		case 1:
			return 'bottom';
		case 2:
			return 'left';
		default:
			return 'right';
	}
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $gicentre$elm_vegalite$VegaLite$axisProperty = function (axisProp) {
	switch (axisProp.$) {
		case 0:
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
		case 1:
			var n = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'bandPosition',
					$elm$json$Json$Encode$float(n))
				]);
		case 75:
			var predicate = axisProp.a;
			var cap = axisProp.b;
			var firstProp = A2(
				$elm$core$Basics$composeR,
				$elm$core$List$head,
				$elm$core$Maybe$withDefault(
					_Utils_Tuple2('', $elm$json$Json$Encode$null)));
			var _v2 = function () {
				switch (cap.$) {
					case 0:
						var ha1 = cap.a;
						var ha2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelAlign(ha1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelAlign(ha2))));
					case 1:
						var va1 = cap.a;
						var va2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelBaseline(va1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelBaseline(va2))));
					case 2:
						var c1 = cap.a;
						var c2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelColor(c1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelColor(c2))));
					case 3:
						var f1 = cap.a;
						var f2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFont(f1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFont(f2))));
					case 4:
						var s1 = cap.a;
						var s2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFontSize(s1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFontSize(s2))));
					case 5:
						var s1 = cap.a;
						var s2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFontStyle(s1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFontStyle(s2))));
					case 6:
						var w1 = cap.a;
						var w2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFontWeight(w1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelFontWeight(w2))));
					case 7:
						var o1 = cap.a;
						var o2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelOffset(o1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelOffset(o2))));
					case 8:
						var o1 = cap.a;
						var o2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelOpacity(o1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelOpacity(o2))));
					case 9:
						var p1 = cap.a;
						var p2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelPadding(p1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxLabelPadding(p2))));
					case 10:
						var c1 = cap.a;
						var c2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickColor(c1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickColor(c2))));
					case 11:
						var d1 = cap.a;
						var d2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickDash(d1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickDash(d2))));
					case 12:
						var o1 = cap.a;
						var o2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickDashOffset(o1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickDashOffset(o2))));
					case 13:
						var o1 = cap.a;
						var o2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickOpacity(o1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickOpacity(o2))));
					case 19:
						var s1 = cap.a;
						var s2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickSize(s1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickSize(s2))));
					case 14:
						var w1 = cap.a;
						var w2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickWidth(w1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxTickWidth(w2))));
					case 15:
						var c1 = cap.a;
						var c2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridColor(c1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridColor(c2))));
					case 16:
						var d1 = cap.a;
						var d2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridDash(d1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridDash(d2))));
					case 17:
						var o1 = cap.a;
						var o2 = cap.b;
						return _Utils_Tuple2(
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridDashOffset(o1))),
							firstProp(
								$gicentre$elm_vegalite$VegaLite$axisProperty(
									$gicentre$elm_vegalite$VegaLite$AxGridDashOffset(o2))));
					case 18:
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
		case 15:
			var fmt = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'format',
					$elm$json$Json$Encode$string(fmt))
				]);
		case 16:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'formatType',
					$elm$json$Json$Encode$string('number'))
				]);
		case 17:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'formatType',
					$elm$json$Json$Encode$string('time'))
				]);
		case 18:
			var formatter = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'formatType',
					$elm$json$Json$Encode$string(formatter))
				]);
		case 68:
			var c = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridCap',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$strokeCapLabel(c)))
				]);
		case 69:
			var c = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridColor',
					$elm$json$Json$Encode$string(c))
				]);
		case 70:
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
		case 71:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridDashOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 72:
			var o = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridOpacity',
					$elm$json$Json$Encode$float(o))
				]);
		case 73:
			var w = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'gridWidth',
					$elm$json$Json$Encode$float(w))
				]);
		case 19:
			var b = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labels',
					$elm$json$Json$Encode$bool(b))
				]);
		case 20:
			var ha = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(ha)))
				]);
		case 22:
			var va = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelBaseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 23:
			var mn = axisProp.a;
			if (!mn.$) {
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
		case 21:
			var a = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelAngle',
					$elm$json$Json$Encode$float(a))
				]);
		case 24:
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 25:
			var ex = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelExpr',
					$elm$json$Json$Encode$string(ex))
				]);
		case 26:
			var mn = axisProp.a;
			if (!mn.$) {
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
		case 27:
			var n = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFlushOffset',
					$elm$json$Json$Encode$float(n))
				]);
		case 28:
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFont',
					$elm$json$Json$Encode$string(s))
				]);
		case 29:
			var n = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFontSize',
					$elm$json$Json$Encode$float(n))
				]);
		case 30:
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFontStyle',
					$elm$json$Json$Encode$string(s))
				]);
		case 31:
			var fw = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelFontWeight',
					$gicentre$elm_vegalite$VegaLite$fontWeightSpec(fw))
				]);
		case 33:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelLimit',
					$elm$json$Json$Encode$float(x))
				]);
		case 32:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelLineHeight',
					$elm$json$Json$Encode$float(x))
				]);
		case 34:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 35:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 36:
			var strat = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelOverlap',
					$gicentre$elm_vegalite$VegaLite$overlapStrategySpec(strat))
				]);
		case 37:
			var pad = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelPadding',
					$elm$json$Json$Encode$float(pad))
				]);
		case 38:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'labelSeparation',
					$elm$json$Json$Encode$float(x))
				]);
		case 8:
			var b = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domain',
					$elm$json$Json$Encode$bool(b))
				]);
		case 9:
			var c = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainCap',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$strokeCapLabel(c)))
				]);
		case 10:
			var c = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainColor',
					$elm$json$Json$Encode$string(c))
				]);
		case 11:
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
		case 12:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainDashOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 13:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 14:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'domainWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 67:
			var b = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'grid',
					$elm$json$Json$Encode$bool(b))
				]);
		case 2:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'maxExtent',
					$elm$json$Json$Encode$float(x))
				]);
		case 3:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'minExtent',
					$elm$json$Json$Encode$float(x))
				]);
		case 4:
			var side = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'orient',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$sideLabel(side)))
				]);
		case 5:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'offset',
					$elm$json$Json$Encode$float(x))
				]);
		case 6:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'position',
					$elm$json$Json$Encode$float(x))
				]);
		case 39:
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
		case 7:
			var n = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'zindex',
					$elm$json$Json$Encode$int(n))
				]);
		case 48:
			var b = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'ticks',
					$elm$json$Json$Encode$bool(b))
				]);
		case 40:
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 41:
			var tc = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickCount',
					$gicentre$elm_vegalite$VegaLite$scaleNiceSpec(tc))
				]);
		case 42:
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
		case 43:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickDashOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 44:
			var b = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickExtra',
					$elm$json$Json$Encode$bool(b))
				]);
		case 45:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickOffset',
					$elm$json$Json$Encode$float(x))
				]);
		case 46:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 47:
			var b = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickRound',
					$elm$json$Json$Encode$bool(b))
				]);
		case 74:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickMinStep',
					$elm$json$Json$Encode$float(x))
				]);
		case 49:
			var sz = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickSize',
					$elm$json$Json$Encode$float(sz))
				]);
		case 50:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'tickWidth',
					$elm$json$Json$Encode$float(x))
				]);
		case 51:
			var vals = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'values',
					$gicentre$elm_vegalite$VegaLite$toList(
						$gicentre$elm_vegalite$VegaLite$dataValuesSpecs(vals)))
				]);
		case 52:
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'title',
					$gicentre$elm_vegalite$VegaLite$multilineTextSpec(s))
				]);
		case 53:
			var al = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleAlign',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$hAlignLabel(al)))
				]);
		case 55:
			var a = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleAngle',
					$elm$json$Json$Encode$float(a))
				]);
		case 54:
			var an = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleAnchor',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$anchorLabel(an)))
				]);
		case 56:
			var va = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleBaseline',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$vAlignLabel(va)))
				]);
		case 57:
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleColor',
					$elm$json$Json$Encode$string(s))
				]);
		case 58:
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFont',
					$elm$json$Json$Encode$string(s))
				]);
		case 59:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontSize',
					$elm$json$Json$Encode$float(x))
				]);
		case 60:
			var s = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontStyle',
					$elm$json$Json$Encode$string(s))
				]);
		case 61:
			var fw = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleFontWeight',
					$gicentre$elm_vegalite$VegaLite$fontWeightSpec(fw))
				]);
		case 62:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleLimit',
					$elm$json$Json$Encode$float(x))
				]);
		case 63:
			var x = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titleOpacity',
					$elm$json$Json$Encode$float(x))
				]);
		case 64:
			var pad = axisProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'titlePadding',
					$elm$json$Json$Encode$float(pad))
				]);
		case 65:
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
	switch (method) {
		case 0:
			return 'value';
		case 1:
			return 'mean';
		case 2:
			return 'median';
		case 3:
			return 'max';
		default:
			return 'min';
	}
};
var $gicentre$elm_vegalite$VegaLite$imputeProperty = function (ip) {
	switch (ip.$) {
		case 0:
			if (!ip.a.$) {
				if (!ip.b.$) {
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
				if (!ip.b.$) {
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
		case 1:
			var dVals = ip.a;
			return _Utils_Tuple2(
				'keyvals',
				$gicentre$elm_vegalite$VegaLite$toList(
					$gicentre$elm_vegalite$VegaLite$dataValuesSpecs(dVals)));
		case 2:
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
		case 3:
			var method = ip.a;
			return _Utils_Tuple2(
				'method',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$imMethodLabel(method)));
		case 5:
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
	switch (sp) {
		case 0:
			return $elm$json$Json$Encode$string('zero');
		case 1:
			return $elm$json$Json$Encode$string('normalize');
		case 2:
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
		case 0:
			var s = pDef.a;
			return _Utils_Tuple2(
				'field',
				$elm$json$Json$Encode$string(s));
		case 1:
			var d = pDef.a;
			return _Utils_Tuple2(
				'datum',
				$gicentre$elm_vegalite$VegaLite$dataValueSpec(d));
		case 6:
			var measure = pDef.a;
			return _Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$measurementLabel(measure)));
		case 7:
			var bps = pDef.a;
			return $gicentre$elm_vegalite$VegaLite$bin(bps);
		case 8:
			return _Utils_Tuple2(
				'bin',
				$elm$json$Json$Encode$string('binned'));
		case 11:
			var op = pDef.a;
			return _Utils_Tuple2(
				'aggregate',
				$gicentre$elm_vegalite$VegaLite$operationSpec(op));
		case 9:
			var tu = pDef.a;
			return _Utils_Tuple2(
				'timeUnit',
				$gicentre$elm_vegalite$VegaLite$timeUnitSpec(tu));
		case 10:
			var t = pDef.a;
			return _Utils_Tuple2(
				'title',
				$gicentre$elm_vegalite$VegaLite$multilineTextSpec(t));
		case 14:
			var sps = pDef.a;
			_v1$4:
			while (true) {
				if (!sps.b) {
					return _Utils_Tuple2('sort', $elm$json$Json$Encode$null);
				} else {
					if (!sps.b.b) {
						switch (sps.a.$) {
							case 0:
								var _v2 = sps.a;
								return _Utils_Tuple2(
									'sort',
									$elm$json$Json$Encode$string('ascending'));
							case 1:
								var _v3 = sps.a;
								return _Utils_Tuple2(
									'sort',
									$elm$json$Json$Encode$string('descending'));
							case 2:
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
		case 15:
			var x = pDef.a;
			return _Utils_Tuple2(
				'band',
				$elm$json$Json$Encode$float(x));
		case 12:
			var sps = pDef.a;
			return _Utils_eq(sps, _List_Nil) ? _Utils_Tuple2('scale', $elm$json$Json$Encode$null) : _Utils_Tuple2(
				'scale',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$scaleProperty, sps)));
		case 13:
			var aps = pDef.a;
			return _Utils_eq(aps, _List_Nil) ? _Utils_Tuple2('axis', $elm$json$Json$Encode$null) : _Utils_Tuple2(
				'axis',
				$elm$json$Json$Encode$object(
					A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$axisProperty, aps)));
		case 16:
			var so = pDef.a;
			return $gicentre$elm_vegalite$VegaLite$stackOffsetProperty(so);
		case 5:
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
		case 2:
			return _Utils_Tuple2(
				'value',
				$elm$json$Json$Encode$string('width'));
		case 3:
			return _Utils_Tuple2(
				'value',
				$elm$json$Json$Encode$string('height'));
		case 4:
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
	switch (pChannel) {
		case 0:
			return 'x';
		case 1:
			return 'y';
		case 2:
			return 'x2';
		case 3:
			return 'y2';
		case 4:
			return 'theta';
		case 5:
			return 'theta2';
		case 6:
			return 'radius';
		case 7:
			return 'radius2';
		case 12:
			return 'xError';
		case 13:
			return 'yError';
		case 14:
			return 'xError2';
		case 15:
			return 'yError2';
		case 8:
			return 'longitude';
		case 9:
			return 'latitude';
		case 10:
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
var $gicentre$elm_vegalite$VegaLite$Bind = function (a) {
	return {$: 13, a: a};
};
var $gicentre$elm_vegalite$VegaLite$seBind = $gicentre$elm_vegalite$VegaLite$Bind;
var $gicentre$elm_vegalite$VegaLite$Fields = function (a) {
	return {$: 7, a: a};
};
var $gicentre$elm_vegalite$VegaLite$seFields = $gicentre$elm_vegalite$VegaLite$Fields;
var $gicentre$elm_vegalite$VegaLite$SeSingle = 0;
var $gicentre$elm_vegalite$VegaLite$seSingle = 0;
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $gicentre$elm_vegalite$VegaLite$selectionLabel = function (seType) {
	switch (seType) {
		case 0:
			return 'single';
		case 1:
			return 'multi';
		default:
			return 'interval';
	}
};
var $gicentre$elm_vegalite$VegaLite$NullValue = {$: 4};
var $gicentre$elm_vegalite$VegaLite$bindLegendProperty = function (blProp) {
	switch (blProp.$) {
		case 1:
			var ch = blProp.a;
			return _Utils_Tuple2(
				'encodings',
				A2(
					$elm$json$Json$Encode$list,
					$elm$json$Json$Encode$string,
					_List_fromArray(
						[
							$gicentre$elm_vegalite$VegaLite$channelLabel(ch)
						])));
		case 0:
			var f = blProp.a;
			return _Utils_Tuple2(
				'fields',
				A2(
					$elm$json$Json$Encode$list,
					$elm$json$Json$Encode$string,
					_List_fromArray(
						[f])));
		default:
			var es = blProp.a;
			return _Utils_Tuple2(
				'bind',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'legend',
							$elm$json$Json$Encode$string(es))
						])));
	}
};
var $gicentre$elm_vegalite$VegaLite$inputProperty = function (prop) {
	switch (prop.$) {
		case 3:
			var x = prop.a;
			return _Utils_Tuple2(
				'min',
				$elm$json$Json$Encode$float(x));
		case 4:
			var x = prop.a;
			return _Utils_Tuple2(
				'max',
				$elm$json$Json$Encode$float(x));
		case 6:
			var x = prop.a;
			return _Utils_Tuple2(
				'step',
				$elm$json$Json$Encode$float(x));
		case 0:
			var x = prop.a;
			return _Utils_Tuple2(
				'debounce',
				$elm$json$Json$Encode$float(x));
		case 5:
			var s = prop.a;
			return _Utils_Tuple2(
				'name',
				$elm$json$Json$Encode$string(s));
		case 2:
			var opts = prop.a;
			return _Utils_Tuple2(
				'options',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, opts));
		case 7:
			var el = prop.a;
			return _Utils_Tuple2(
				'placeholder',
				$elm$json$Json$Encode$string(el));
		default:
			var el = prop.a;
			return _Utils_Tuple2(
				'element',
				$elm$json$Json$Encode$string(el));
	}
};
var $gicentre$elm_vegalite$VegaLite$bindingSpec = function (bnd) {
	switch (bnd.$) {
		case 0:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('range')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 1:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('checkbox')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 2:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('radio')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 3:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('select')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 4:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('text')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 5:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('number')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 6:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('date')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 7:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('time')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 8:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('month')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 9:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('week')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 10:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('datetimelocal')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		case 11:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('tel')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
		default:
			var label = bnd.a;
			var props = bnd.b;
			return _Utils_Tuple2(
				label,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							'input',
							$elm$json$Json$Encode$string('color')),
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$inputProperty, props))));
	}
};
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $gicentre$elm_vegalite$VegaLite$selectionMarkProperty = function (markProp) {
	switch (markProp.$) {
		case 0:
			var colour = markProp.a;
			return _Utils_Tuple2(
				'fill',
				$elm$json$Json$Encode$string(colour));
		case 1:
			var x = markProp.a;
			return _Utils_Tuple2(
				'fillOpacity',
				$elm$json$Json$Encode$float(x));
		case 2:
			var colour = markProp.a;
			return _Utils_Tuple2(
				'stroke',
				$elm$json$Json$Encode$string(colour));
		case 3:
			var x = markProp.a;
			return _Utils_Tuple2(
				'strokeOpacity',
				$elm$json$Json$Encode$float(x));
		case 4:
			var x = markProp.a;
			return _Utils_Tuple2(
				'strokeWidth',
				$elm$json$Json$Encode$float(x));
		case 5:
			var xs = markProp.a;
			return _Utils_eq(xs, _List_Nil) ? _Utils_Tuple2('strokeDash', $elm$json$Json$Encode$null) : _Utils_Tuple2(
				'strokeDash',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, xs));
		case 6:
			var x = markProp.a;
			return _Utils_Tuple2(
				'strokeDashOffset',
				$elm$json$Json$Encode$float(x));
		default:
			var cur = markProp.a;
			return _Utils_Tuple2(
				'cursor',
				$elm$json$Json$Encode$string(
					$gicentre$elm_vegalite$VegaLite$cursorLabel(cur)));
	}
};
var $gicentre$elm_vegalite$VegaLite$selectionResolutionLabel = function (res) {
	switch (res) {
		case 0:
			return 'global';
		case 1:
			return 'union';
		default:
			return 'intersect';
	}
};
var $gicentre$elm_vegalite$VegaLite$selectionProperties = function (selProp) {
	switch (selProp.$) {
		case 7:
			var fNames = selProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'fields',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, fNames))
				]);
		case 9:
			var iVals = selProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'init',
					$elm$json$Json$Encode$object(
						A2(
							$elm$core$List$map,
							$elm$core$Tuple$mapSecond($gicentre$elm_vegalite$VegaLite$dataValueSpec),
							iVals)))
				]);
		case 10:
			var maybeX = selProp.a;
			var maybeY = selProp.b;
			var yExtent = _Utils_eq(
				maybeY,
				$elm$core$Maybe$Just(
					_Utils_Tuple2($gicentre$elm_vegalite$VegaLite$NullValue, $gicentre$elm_vegalite$VegaLite$NullValue))) ? $elm$core$Maybe$Nothing : maybeY;
			var xExtent = _Utils_eq(
				maybeX,
				$elm$core$Maybe$Just(
					_Utils_Tuple2($gicentre$elm_vegalite$VegaLite$NullValue, $gicentre$elm_vegalite$VegaLite$NullValue))) ? $elm$core$Maybe$Nothing : maybeX;
			var _v1 = _Utils_Tuple2(xExtent, yExtent);
			if (!_v1.a.$) {
				if (!_v1.b.$) {
					var _v2 = _v1.a.a;
					var xMin = _v2.a;
					var xMax = _v2.b;
					var _v3 = _v1.b.a;
					var yMin = _v3.a;
					var yMax = _v3.b;
					return _List_fromArray(
						[
							_Utils_Tuple2(
							'init',
							$elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'x',
										$gicentre$elm_vegalite$VegaLite$toList(
											_List_fromArray(
												[
													$gicentre$elm_vegalite$VegaLite$dataValueSpec(xMin),
													$gicentre$elm_vegalite$VegaLite$dataValueSpec(xMax)
												]))),
										_Utils_Tuple2(
										'y',
										$gicentre$elm_vegalite$VegaLite$toList(
											_List_fromArray(
												[
													$gicentre$elm_vegalite$VegaLite$dataValueSpec(yMin),
													$gicentre$elm_vegalite$VegaLite$dataValueSpec(yMax)
												])))
									])))
						]);
				} else {
					var _v4 = _v1.a.a;
					var xMin = _v4.a;
					var xMax = _v4.b;
					var _v5 = _v1.b;
					return _List_fromArray(
						[
							_Utils_Tuple2(
							'init',
							$elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'x',
										$gicentre$elm_vegalite$VegaLite$toList(
											_List_fromArray(
												[
													$gicentre$elm_vegalite$VegaLite$dataValueSpec(xMin),
													$gicentre$elm_vegalite$VegaLite$dataValueSpec(xMax)
												])))
									])))
						]);
				}
			} else {
				if (!_v1.b.$) {
					var _v6 = _v1.a;
					var _v7 = _v1.b.a;
					var yMin = _v7.a;
					var yMax = _v7.b;
					return _List_fromArray(
						[
							_Utils_Tuple2(
							'init',
							$elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'y',
										$gicentre$elm_vegalite$VegaLite$toList(
											_List_fromArray(
												[
													$gicentre$elm_vegalite$VegaLite$dataValueSpec(yMin),
													$gicentre$elm_vegalite$VegaLite$dataValueSpec(yMax)
												])))
									])))
						]);
				} else {
					var _v8 = _v1.a;
					var _v9 = _v1.b;
					return _List_fromArray(
						[
							_Utils_Tuple2('init', $elm$json$Json$Encode$null)
						]);
				}
			}
		case 8:
			var channels = selProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'encodings',
					A2(
						$elm$json$Json$Encode$list,
						A2($elm$core$Basics$composeL, $elm$json$Json$Encode$string, $gicentre$elm_vegalite$VegaLite$channelLabel),
						channels))
				]);
		case 3:
			var evStr = selProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'on',
					$elm$json$Json$Encode$string(evStr))
				]);
		case 4:
			var evStr = selProp.a;
			var _v10 = $elm$core$String$trim(evStr);
			if (_v10 === '') {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'clear',
						$elm$json$Json$Encode$bool(false))
					]);
			} else {
				var evStrTrimmed = _v10;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'clear',
						$elm$json$Json$Encode$string(evStrTrimmed))
					]);
			}
		case 0:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'empty',
					$elm$json$Json$Encode$string('none'))
				]);
		case 11:
			var res = selProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'resolve',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$selectionResolutionLabel(res)))
				]);
		case 12:
			var markProps = selProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'mark',
					$elm$json$Json$Encode$object(
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$selectionMarkProperty, markProps)))
				]);
		case 1:
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'bind',
					$elm$json$Json$Encode$string('scales'))
				]);
		case 2:
			var blProps = selProp.a;
			var labelledSpecs = A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$bindLegendProperty, blProps);
			return A2(
				$elm$core$List$member,
				'bind',
				A2($elm$core$List$map, $elm$core$Tuple$first, labelledSpecs)) ? labelledSpecs : A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					'bind',
					$elm$json$Json$Encode$string('legend')),
				labelledSpecs);
		case 13:
			var binds = selProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'bind',
					$elm$json$Json$Encode$object(
						A2($elm$core$List$map, $gicentre$elm_vegalite$VegaLite$bindingSpec, binds)))
				]);
		case 14:
			var b = selProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'nearest',
					$elm$json$Json$Encode$bool(b))
				]);
		case 15:
			var ex = selProp.a;
			return _List_fromArray(
				[
					_Utils_Tuple2(
					'toggle',
					$elm$json$Json$Encode$string(ex))
				]);
		case 5:
			var e = selProp.a;
			return (e === '') ? _List_fromArray(
				[
					_Utils_Tuple2(
					'translate',
					$elm$json$Json$Encode$bool(false))
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'translate',
					$elm$json$Json$Encode$string(e))
				]);
		default:
			var e = selProp.a;
			return (e === '') ? _List_fromArray(
				[
					_Utils_Tuple2(
					'zoom',
					$elm$json$Json$Encode$bool(false))
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					'zoom',
					$elm$json$Json$Encode$string(e))
				]);
	}
};
var $gicentre$elm_vegalite$VegaLite$select = F3(
	function (selName, sType, options) {
		var selProps = A2(
			$elm$core$List$filter,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Tuple$second,
				$elm$core$Basics$neq($elm$json$Json$Encode$null)),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string(
						$gicentre$elm_vegalite$VegaLite$selectionLabel(sType))),
				A2($elm$core$List$concatMap, $gicentre$elm_vegalite$VegaLite$selectionProperties, options)));
		return $elm$core$List$cons(
			_Utils_Tuple2(
				selName,
				$elm$json$Json$Encode$object(selProps)));
	});
var $gicentre$elm_vegalite$VegaLite$VLSelection = 30;
var $gicentre$elm_vegalite$VegaLite$selection = function (sels) {
	return _Utils_Tuple2(
		30,
		$elm$json$Json$Encode$object(sels));
};
var $gicentre$elm_vegalite$VegaLite$ByChannel = function (a) {
	return {$: 5, a: a};
};
var $gicentre$elm_vegalite$VegaLite$soByChannel = $gicentre$elm_vegalite$VegaLite$ByChannel;
var $gicentre$elm_vegalite$VegaLite$Descending = {$: 1};
var $gicentre$elm_vegalite$VegaLite$soDescending = $gicentre$elm_vegalite$VegaLite$Descending;
var $gicentre$elm_vegalite$VegaLite$vlPropertyLabel = function (spec) {
	switch (spec) {
		case 0:
			return 'name';
		case 1:
			return 'description';
		case 2:
			return 'title';
		case 3:
			return 'width';
		case 5:
			return 'width';
		case 4:
			return 'height';
		case 6:
			return 'height';
		case 8:
			return 'padding';
		case 7:
			return 'autosize';
		case 9:
			return 'background';
		case 10:
			return 'data';
		case 11:
			return 'datasets';
		case 14:
			return 'projection';
		case 12:
			return 'mark';
		case 13:
			return 'transform';
		case 15:
			return 'encoding';
		case 29:
			return 'config';
		case 30:
			return 'selection';
		case 17:
			return 'concat';
		case 20:
			return 'columns';
		case 18:
			return 'hconcat';
		case 19:
			return 'vconcat';
		case 16:
			return 'layer';
		case 21:
			return 'repeat';
		case 22:
			return 'facet';
		case 25:
			return 'spacing';
		case 26:
			return 'align';
		case 27:
			return 'bounds';
		case 28:
			return 'center';
		case 23:
			return 'spec';
		case 24:
			return 'resolve';
		default:
			return 'view';
	}
};
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
var $gicentre$elm_vegalite$VegaLite$VLTransform = 13;
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $gicentre$elm_vegalite$VegaLite$transform = function (transforms) {
	var assemble = function (_v1) {
		var trName = _v1.a;
		var val = _v1.b;
		if (trName === 'multiSpecs') {
			return val;
		} else {
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(trName, val)
					]));
		}
	};
	return $elm$core$List$isEmpty(transforms) ? _Utils_Tuple2(13, $elm$json$Json$Encode$null) : _Utils_Tuple2(
		13,
		A2($elm$json$Json$Encode$list, assemble, transforms));
};
var $author$project$HelloWorld$myVis = function () {
	var trans = A2(
		$elm$core$Basics$composeL,
		A2(
			$elm$core$Basics$composeL,
			$gicentre$elm_vegalite$VegaLite$transform,
			$gicentre$elm_vegalite$VegaLite$filter(
				$gicentre$elm_vegalite$VegaLite$fiSelection('mySelection'))),
		$gicentre$elm_vegalite$VegaLite$filter(
			$gicentre$elm_vegalite$VegaLite$fiExpr('datum.featureType != \'unknown\'')));
	var sel = A2(
		$elm$core$Basics$composeL,
		$gicentre$elm_vegalite$VegaLite$selection,
		A3(
			$gicentre$elm_vegalite$VegaLite$select,
			'mySelection',
			$gicentre$elm_vegalite$VegaLite$seSingle,
			_List_fromArray(
				[
					$gicentre$elm_vegalite$VegaLite$seFields(
					_List_fromArray(
						['timePeriodsKeys'])),
					$gicentre$elm_vegalite$VegaLite$seBind(
					_List_fromArray(
						[
							A2($gicentre$elm_vegalite$VegaLite$iText, 'timePeriodsKeys', _List_Nil)
						]))
				])));
	var path = 'https://raw.githubusercontent.com/Lunastras/dataviz/main/datasets/';
	var encFrequency = A2(
		$elm$core$Basics$composeL,
		A2(
			$elm$core$Basics$composeL,
			A2(
				$elm$core$Basics$composeL,
				$gicentre$elm_vegalite$VegaLite$encoding,
				A2(
					$gicentre$elm_vegalite$VegaLite$position,
					0,
					_List_fromArray(
						[
							$gicentre$elm_vegalite$VegaLite$pName('featureType'),
							$gicentre$elm_vegalite$VegaLite$pOrdinal,
							$gicentre$elm_vegalite$VegaLite$pSort(
							_List_fromArray(
								[
									$gicentre$elm_vegalite$VegaLite$soByChannel($gicentre$elm_vegalite$VegaLite$chY),
									$gicentre$elm_vegalite$VegaLite$soDescending
								]))
						]))),
			A2(
				$gicentre$elm_vegalite$VegaLite$position,
				1,
				_List_fromArray(
					[
						$gicentre$elm_vegalite$VegaLite$pAggregate($gicentre$elm_vegalite$VegaLite$opCount)
					]))),
		$gicentre$elm_vegalite$VegaLite$color(
			_List_fromArray(
				[
					$gicentre$elm_vegalite$VegaLite$mName('featureType'),
					$gicentre$elm_vegalite$VegaLite$mLegend(_List_Nil)
				])));
	var data = $gicentre$elm_vegalite$VegaLite$dataFromUrl(path + 'pleiades-locations.csv');
	return $gicentre$elm_vegalite$VegaLite$toVegaLite(
		_List_fromArray(
			[
				data(_List_Nil),
				$gicentre$elm_vegalite$VegaLite$height(600),
				$gicentre$elm_vegalite$VegaLite$bar(_List_Nil),
				sel(_List_Nil),
				trans(_List_Nil),
				encFrequency(_List_Nil)
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
		au: $elm$core$Basics$always(
			_Utils_Tuple2(
				$author$project$HelloWorld$myVis,
				$author$project$HelloWorld$elmToJS($author$project$HelloWorld$myVis))),
		aA: $elm$core$Basics$always($elm$core$Platform$Sub$none),
		aC: F2(
			function (_v0, model) {
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			})
	});
_Platform_export({'HelloWorld':{'init':$author$project$HelloWorld$main(
	$elm$json$Json$Decode$succeed(0))(0)}});}(this));