<template>
  <div class="stepper-container">
    <div class="stepper-wrapper">
      <template v-for="(step, index) of steps">
        <div class="stepper-item" :class="{ active: index < currentStep }">
          <div class="stepper-number">
            {{ index + 1}}
          </div>
          <div class="stepper-label">
            {{ step }}
          </div>
          <template v-if="index < 2">
            <div class="stepper-arrow">
              &gt;
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>
<script src="./Stepper.ts"></script>
<style scoped src="./Stepper.css"></style>
