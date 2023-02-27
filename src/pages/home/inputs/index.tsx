import React, { ReactElement } from 'react'
import {
  Autocomplete,
  Center,
  ColorInput,
  MultiSelect,
  NativeSelect,
  PasswordInput,
  Select,
  SimpleGrid,
  TextInput,
} from '@mantine/core'
import MarsLayout from 'components/business/ApplicationLayout'
import { NextPageWithLayout } from 'types/nextCustomType'

const Inputs: NextPageWithLayout = () => (
  <Center>
    <SimpleGrid cols={2} w="960px">
      <TextInput placeholder="Your name" label="Text input" withAsterisk />
      <PasswordInput placeholder="Password input" label="Password" withAsterisk />
      <ColorInput placeholder="Pick color" label="Color input" defaultValue="#C5D899" />
      <NativeSelect data={['React', 'Vue', 'Angular', 'Svelte']} label="Native select" withAsterisk />
      <Select
        label="Custom select"
        defaultValue="react"
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      />
      <Select
        label="Searchable select"
        placeholder="Search me"
        searchable
        nothingFound="No options"
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
      <MultiSelect
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
          { value: 'riot', label: 'Riot' },
          { value: 'next', label: 'Next.js' },
          { value: 'blitz', label: 'Blitz.js' },
        ]}
        label="Custom multi select"
        placeholder="Pick all you want"
      />
      <Autocomplete
        label="Autocomplete"
        placeholder="Enter anything with your suggestions"
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
      <TextInput
        placeholder="Additional info is always useful"
        description="Every input can have description..."
        label="With description"
        withAsterisk
      />
      <TextInput label="With error" error="... and error" defaultValue="Oh-oh" />
    </SimpleGrid>
  </Center>
)

Inputs.getLayout = function getLayout(page: ReactElement) {
  return <MarsLayout>{page}</MarsLayout>
}

export async function getServerSideProps() {
  return {
    props: {
      pageTitle: 'Inputs',
    },
  }
}

export default Inputs
