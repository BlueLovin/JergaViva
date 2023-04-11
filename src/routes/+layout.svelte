<script>
	import './styles.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	* {
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
	}
	.app {
		display: flex;
		flex-direction: column;
		min-height: 97vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
