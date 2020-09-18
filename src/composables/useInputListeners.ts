import { computed, SetupContext } from '@vue/composition-api'

export function useInputListeners(props: any, context: SetupContext) {
  if (!props || typeof props.value === 'undefined') {
    throw new Error(
      "No prop 'value' found. Make sure to define it for the input listeners to work.\nAdd the prop like this:\nprops: { value: { type: String, required: false, default: '' } }"
    )
  }

  const inputListeners = computed(() =>
    Object.assign({}, context.listeners, {
      input(event: InputEvent) {
        const input = event.target as HTMLInputElement
        context.emit('input', input.value)
      },
    })
  )

  return { inputListeners }
}
