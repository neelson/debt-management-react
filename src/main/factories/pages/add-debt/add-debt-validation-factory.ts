import { ValidationComposite, ValidationBuilder as Builder } from '@/validation/validators'

export const makeAddDebtValidation = (): ValidationComposite => ValidationComposite.build([
  ...Builder.field('description').required().min(5).build(),
  ...Builder.field('value').required().build(),
  ...Builder.field('date').required().build()
])
