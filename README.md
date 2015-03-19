# isolate.js
Isolate the scope of your Javascript module with Isolate.js

Isolate.js adds the ability to have scripts loaded in a dynamically created empty iframe. This allows all scripts to execute in their own "window" scope, and therefore avoids conflicts between scripts.

It allows for external HTML modules to easily be embedded in a page with no conflicts - it simplifies the creation of SaaS components.

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Isolate.js</title>
	</head>
	<body>
	
		<!-- module 1 container -->
		<div class="container-module-1"></div>
		
		<!-- module 2 container -->
		<div class="container-module-2"></div>
	
		<!-- module 1 -->
		<script class="module-1" src="https://code.jquery.com/jquery-2.1.3.min.js" type="text/isolate"></script>
		<script class="module-1" src="js/isolate.js" type="text/isolate"></script><!-- include isolate.js for helpers functions -->		
		<script class="module-1" src="example/module-1.js" type="text/isolate"></script>
		
		<!-- module 2 -->
		<script class="module-2" src="https://code.jquery.com/jquery-1.11.2.min.js" type="text/isolate"></script>
		<script class="module-2" src="example/module-2.js" type="text/isolate"></script>
		
		<!-- init isolate -->
		<script src="js/isolate.js"></script>
		<script>isolate.modules.init('module-1');</script>
		<script>isolate.modules.init('module-2');</script>
		
	</body>
</html>
```
