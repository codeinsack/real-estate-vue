<template>
  <VContainer fill-height fluid>
    <VRow justify="center">
      <VCol cols="6">
        <VCard class="pa-12">
          <VCardTitle>Register</VCardTitle>
          <VCardSubtitle>Please enter your data</VCardSubtitle>
          <VCardText>
            <VTextField placeholder="Email" />
            <VTextField placeholder="Password" />
            <VTextField placeholder="Name" />
            <VTextField placeholder="Surname" />
            <VTextField placeholder="Phone" />
            <VSelect placeholder="Role" />
          </VCardText>
          <VCardActions class="d-flex justify-end mt-3">
            <VBtn color="primary" outlined>Submit</VBtn>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
