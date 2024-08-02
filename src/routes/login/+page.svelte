<script lang="ts">
	import { Form } from '$lib/components/form';
	import { FormInput } from '$lib/components/form/index.js';

	let errors = $state<{email?: string, password?: string}>({});
</script>

<div class="flex items-center justify-center w-screen h-screen">
		<div class="max-w-sm w-full">
			<img src="/logo.png" alt="Yummeals Logo" class="mx-auto mb-5" />
			<Form
				onError={(data) => errors = data?.errors}
				method="post"
				class="p-5 bg-white border space-y-3"
				buttonLabel="Login"
			>
				<h3 class="text-xl font-medium">Login</h3>
				<FormInput label="Email Address" name="email" type="email" error={errors?.email} />
				<FormInput label="Password" type="password" name="password" error={errors?.password} />
			</Form>
		</div>
</div>