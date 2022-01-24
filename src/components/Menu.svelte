<script lang="ts">
	import { page } from '../store'

  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
	import { Pages } from '../types';

	let page_value;

	page.subscribe(value => {
		page_value = value;
	});

	const tabs = [Pages.HOME, Pages.EMOTION, Pages.STATS];

	function onClick(tabName: Pages){
		return (e) => {			
			page.set(tabName)
		}
	}	
</script>

<div class="menu">
	<TabBar tabs={tabs} let:tab bind:active={page_value}>
    <Tab {tab} on:click={onClick(tab)}>
      <Label>{tab}</Label>
    </Tab>
  </TabBar>
</div>

<style lang="scss">
	.menu {
		display: flex;

	}
</style>