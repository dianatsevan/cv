// TODO: rework ai generated code

<template>
  <div class="contact-me-page">
    <!-- LEFT COLUMN: Form -->
    <section class="form-column">
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label>_name:</label>
          <input v-model="name" type="text" placeholder="Jonathan Davis" />
        </div>

        <div class="form-group">
          <label>_email:</label>
          <input
            v-model="email"
            type="email"
            placeholder="j.davis@example.com"
          />
        </div>

        <div class="form-group">
          <label>_message</label>
          <textarea
            v-model="message"
            placeholder="your message here..."
          ></textarea>
        </div>

        <FilledButton
          class="submit-btn"
          color="primary"
          :disabled="buttonState"
          type="submit"
          >submit-message</FilledButton
        >
      </form>
    </section>

    <!-- RIGHT COLUMN: Code Snippet -->
    <section class="code-column">
      <pre class="code-snippet">
const button = document.querySelector('#sendBtn');

const msgData = {
  name: "{{ name || 'Jonathan Davis' }}",
  email: "{{ email || '' }}",
  message: "{{ message || '' }}",
  date: "Thu 21 Apr"
};

button.addEventListener('click', () => {
  form.send(msgData);
});
      </pre>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { FilledButton } from '@/components/ui/button/filled-button';

const name = ref('wergwerg');
const email = ref('');
const message = ref('');
const buttonState = computed(
  () => !name.value || !email.value || !message.value,
);

const submitForm = () => {
  alert(`Sending message from ${name.value}`);
};
</script>

<style lang="scss" scoped>
/* Overall container: two columns (form on the left, code on the right) */
.contact-me-page {
  display: flex;
  height: 100%; /* Or a set value, e.g., 80vh, as you prefer */
  color: #fff;
}

/* Left column (form) */
.form-column {
  flex: 1;
  padding: utils.rem(32px);
  display: flex;
  align-items: center; /* vertically center the form if desired */
}

/* The form itself */
.contact-form {
  width: 100%;
  max-width: utils.rem(300px); /* limit form width */
  display: flex;
  flex-direction: column;
  gap: utils.rem(16px);
}

/* Label + input/textarea groups */
.form-group {
  display: flex;
  flex-direction: column;
  gap: utils.rem(8px);
}

/* Label styling */
.form-group label {
  font-size: utils.rem(14px);
  color: #ccc;
}

/* Inputs */
.contact-form input,
.contact-form textarea {
  border: 1px solid #3a3a3a;
  border-radius: 4px;
  padding: utils.rem(10px);
  color: black;
  font-size: utils.rem(14px);
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #62dafc;
}

/* Textarea sizing */
.contact-form textarea {
  min-height: utils.rem(100px);
  resize: vertical; /* allow vertical resize only if you want */
}

/* Submit button */
.submit-btn {
  align-self: flex-start;
}

/* Right column (code snippet) */
.code-column {
  flex: 1;
  padding: utils.rem(32px);
  border-left: 1px solid #2a2f2f;
  overflow: auto; /* scroll if code is long */
  display: flex;
  align-items: center;
}

/* Code snippet styling */
.code-snippet {
  margin: 0;
  color: #cdd3de;
  line-height: 1.5;
  font-size: utils.rem(14px);
  white-space: pre; /* preserve spacing */
}
</style>
