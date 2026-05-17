<template>
  <div class="card">
    <h2 class="section-title">Add New Person</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>Name:</label>
        <input type="text" v-model="name" required />
      </div>
      <div class="form-group">
        <label>Year of Birth:</label>
        <input type="number" v-model="yob" required />
      </div>
      <div class="form-group">
        <label>Weight (kg):</label>
        <input type="number" step="0.1" v-model="weight" required />
      </div>
      <div class="form-group">
        <label>Height (cm):</label>
        <input type="number" step="0.1" v-model="height" required />
      </div>
      <button type="submit" class="btn">Add Person</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PersonForm',
  data() {
    return {
      name: '',
      yob: '',
      weight: '',
      height: ''
    }
  },
  methods: {
    submitForm() {
      if (!this.name || !this.yob || !this.weight || !this.height) return;

      const yobNum = Number(this.yob);
      const weightNum = Number(this.weight);
      const heightNum = Number(this.height);
      const currentYear = new Date().getFullYear();
      const ageNum = currentYear - yobNum;

      // Calculate BMI
      const heightInMeters = heightNum / 100;
      const bmiCalc = weightNum / (heightInMeters * heightInMeters);
      const bmiRounded = bmiCalc.toFixed(2);

      // Determine Category
      let cat = '';
      const b = Number(bmiRounded);
      if (b < 18.5) {
        cat = 'Underweight';
      } else if (b >= 18.5 && b < 25) {
        cat = 'Normal';
      } else if (b >= 25 && b < 30) {
        cat = 'Overweight';
      } else {
        cat = 'Obese';
      }

      const newPerson = {
        id: Date.now(),
        name: this.name,
        yob: yobNum,
        age: ageNum,
        weight: weightNum,
        height: heightNum,
        bmi: bmiRounded,
        category: cat
      };

      this.$emit('add-person', newPerson);

      // Reset
      this.name = '';
      this.yob = '';
      this.weight = '';
      this.height = '';
    }
  }
}
</script>
