<script>
	import './styles.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	* {
		font-family: 'Roboto';
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
