# JS double click to select entire code snippet

I wanted to add [prism.js](http://prismjs.com/) to an API specification that my team is building at work. Prism's syntax style looks amazing, but there was one feature that I wanted and was not available in the plugins. I wanted to allow users to double click anywhere on a code snippet to select the entire code snippet.

After some digging on the web, the closest I found was this [thread on Stack Overflow](http://stackoverflow.com/a/987376). After some simple re-engineering, here is an [example](https://mingkichong.github.io/double-click-to-select/example/index.html) of what I got. Users can click anywhere on the snippet to select all the code.

## How to use

Simply add the script to your html header

	<head>
		...
		<script src="dblclick_highlight.js"></script>
		...
	</head>

and add the 'double-click-highlight' class to your code block

	<body>
		...
		<code class="double-click-highlight">
			<!--
			Whatever code you want
			-->
		</code>
		...
	</body>

That's it. As easy as pie :)