<script lang="ts">
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';
	import CharacterCounter from '@smui/textfield/character-counter';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Card from '@smui/card';
	import Button, { Label } from '@smui/button';
	import CircularProgress from '@smui/circular-progress';

	let open = false;

	let value = '';
	let loading = false;
	let response = '';

	const submitJerga = async () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: value })
		};
		loading = true;
		const res = await fetch('/api/prompt', requestOptions);
		response = await res.text();
		open = true;
		loading = false;
	};
</script>

<section>
	<h1>JergaViva!</h1>
	<Card variant="outlined" padded class="mb">
		<Content>JergaViva! es un sitio web que traduce y explica el slang latinoamericano.</Content>
	</Card>

	<Textfield
		textarea
		bind:value
		label="aporte"
		input$rows={8}
		input$cols={54}
		input$resizable={false}
		input$maxlength={500}
	>
		<CharacterCounter slot="helper">0 / 18</CharacterCounter>
	</Textfield>
	<Button
		color="secondary"
		variant="unelevated"
		class="mt"
		on:click={submitJerga}
		bind:disabled={loading}>Que Significa?</Button
	>
	<Dialog bind:open aria-labelledby="simple-title" aria-describedby="simple-content">
		<Title id="simple-title">Repuesta</Title>
		<Content id="simple-content">{response}</Content>
		<Actions>
			<Button
				on:click={() => {
					open = false;
				}}
			>
				<Label>OK</Label>
			</Button>
		</Actions>
	</Dialog>
	{#if loading}
		<div style="display: flex; justify-content: center">
			<CircularProgress style="height: 32px; width: 32px;" indeterminate />
		</div>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	:global(.mb) {
		margin-bottom: 15px;
		max-width: 560px;
		text-align: center;
	}

	:global(.mt) {
		margin-top: 15px;
	}

	h1 {
		width: 100%;
	}
</style>
