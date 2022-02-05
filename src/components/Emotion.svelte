<script land='ts'>
	import Radio from '@smui/radio';
	import { onDestroy } from 'svelte';

	const options = [ -2, -1, 0, 1, 2];
	const factors = [ { id: 1, name: 'Default - Wierd'}, { id: 2, name: 'Active - passive' } ];
	const emotions = [{ id: 1, name: 'Relax', factors: [...factors] }, { id: 2, name: 'Agressive', factors: [...factors] }];

	let emotionInd = 0, factorInd = 0, isFinished = false, time = 10;

	$: emotion = emotions[emotionInd];
	$: factor = emotion.factors[factorInd];
	$: selected = factor?.grade

	function onGrade(grade) {
		return (e) => {
			time = 10
			
			if(factorInd + 1 < emotion.factors.length) {
				factor.grade = grade;
				factorInd++;
			} else if(emotionInd + 1 < emotions.length) {
				emotionInd++;
				factorInd = 0;
			} else {
				isFinished = true
				removeInterval()
			}
		}

	}
	const timerInterval = setInterval(() => {
		time--
		if(time === 0) onGrade(0)()
	}, 1000);

	onDestroy(removeInterval);

	function removeInterval() { 
		clearInterval(timerInterval) 
	}

</script>

<div class="emotion">
	{#if !isFinished}
		<div class="content">
			<h2> { emotion.name } </h2>
			<div class="grades">
				{#each options as option (`${factor.id}_${option}`)}
				<div class="grade">
					<Radio
						bind:group={selected}
						on:click={onGrade(option)}
						value={option}
					/>
					<span> { option } </span>
				</div>
			{/each}
			</div>
			<h3> { factor.name } </h3>
		</div>
		<div class="timer">
			{ time }
		</div>
	{:else}
	<h2> Thank u a lot </h2>
	{/if}
</div>

<style lang="scss">
	.emotion {
		display: flex;
		// flex-direction: column;
		align-items: center;

		color: white;

		.content {
			display: flex;
			flex-direction: column;
		}

		.timer {
			display: flex;

			align-items: center;
			justify-content: center;

			margin-left: 3em;

			font-size: 200%;
			font-weight: bold;
			font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
			color: rgb(156, 38, 38);

			width: 2em;
			height: 2em;
		}
	}

	.grades {
		display: flex;

		margin: 2em 1em;

		& .grade {
			display: flex;
	
			margin-right: 0.5em;

			& div {
				display: flex;
			}

			& span {
				margin: 0 0.5em;
			}
		}
	}
</style>