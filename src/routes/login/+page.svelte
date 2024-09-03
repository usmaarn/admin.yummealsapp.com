<script lang="ts">
	import { Form } from '$lib/components/form';
	import { Input } from '$lib/components/form/index.js';

	let errors = $state<{ email?: string; password?: string }>({});
</script>

<div class="flex h-screen w-screen items-center justify-center">
	<div class="w-full max-w-sm">
		<img src="/logo.png" alt="Yummeals Logo" class="mx-auto mb-5" />
		<Form
			onError={(data) => (errors = data?.errors)}
			method="post"
			class="space-y-3 border bg-white p-5"
			buttonLabel="Login"
		>
			<h3 class="text-xl font-medium">Login</h3>
			<Input label="Username" name="username" error={errors?.email} />
			<Input label="Password" type="password" name="password" error={errors?.password} />
		</Form>
	</div>
</div>
