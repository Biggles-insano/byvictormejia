import StarRating from './StarRating'

export default {
  title: 'Componentes/StarRating',
  component: StarRating,
}

const Template = (args) => <StarRating {...args} />

export const Default = Template.bind({})
Default.args = {
  initialRating: 3,
}

export const Editable = Template.bind({})
Editable.args = {
  initialRating: 2,
  onChange: (rating) => alert(`Nuevo rating: ${rating}`),
}