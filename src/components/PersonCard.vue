<template>
  <div class="person-card">
    <div v-if="isEditing">
      <h4>Edit Person</h4>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" v-model="editForm.name" />
      </div>
      <div class="form-group">
        <label>Year of Birth:</label>
        <input type="number" v-model="editForm.yob" />
      </div>
      <div class="form-group">
        <label>Weight (kg):</label>
        <input type="number" step="0.1" v-model="editForm.weight" />
      </div>
      <div class="form-group">
        <label>Height (cm):</label>
        <input type="number" step="0.1" v-model="editForm.height" />
      </div>
      <button @click="submitEdit" class="btn" style="margin-right: 10px;">Save Changes</button>
      <button @click="cancelEdit" class="btn delete-btn" style="margin-top: 0;">Cancel</button>
    </div>

    <div v-else-if="isPatching">
      <h4>Quick Update (Patch)</h4>
      <div class="form-group">
        <label>Weight (kg):</label>
        <input type="number" step="0.1" v-model="patchForm.weight" />
      </div>
      <div class="form-group">
        <label>Height (cm):</label>
        <input type="number" step="0.1" v-model="patchForm.height" />
      </div>
      <button @click="submitPatch" class="btn" style="margin-right: 10px;">Apply Patch</button>
      <button @click="cancelEdit" class="btn delete-btn" style="margin-top: 0;">Cancel</button>
    </div>

    <div v-else>
      <h3>{{ person.name }}</h3>
      <p><strong>Year of Birth:</strong> {{ person.yob }}</p>
      <p><strong>Age:</strong> {{ person.age }} years old</p>
      <p><strong>Weight:</strong> {{ person.weight }} kg</p>
      <p><strong>Height:</strong> {{ person.height }} cm</p>
      <p><strong>BMI:</strong> {{ person.bmi }} ({{ person.category }})</p>
      <div style="margin-top: 10px;">
        <button @click="startEdit" class="btn" style="margin-right: 5px;">Edit (PUT)</button>
        <button @click="startPatch" class="btn" style="margin-right: 5px; background-color: #34495e;">Patch Weight/Height</button>
        <button @click="$emit('delete', person.id)" class="btn delete-btn" style="margin-top: 0;">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isEditing: false,
      isPatching: false,
      editForm: {},
      patchForm: {}
    }
  },
  methods: {
    startEdit() {
      this.isEditing = true;
      this.isPatching = false;
      this.editForm = { ...this.person };
    },
    startPatch() {
      this.isPatching = true;
      this.isEditing = false;
      this.patchForm = { weight: this.person.weight, height: this.person.height };
    },
    cancelEdit() {
      this.isEditing = false;
      this.isPatching = false;
    },
    recalculate(weight, height, yob) {
      const currentYear = new Date().getFullYear();
      const age = currentYear - Number(yob);
      
      const h = Number(height) / 100;
      const bmi = (Number(weight) / (h * h)).toFixed(2);
      
      let cat = '';
      const b = Number(bmi);
      if (b < 18.5) cat = 'Underweight';
      else if (b >= 18.5 && b < 25) cat = 'Normal';
      else if (b >= 25 && b < 30) cat = 'Overweight';
      else cat = 'Obese';

      return { age, bmi, category: cat };
    },
    submitEdit() {
      const stats = this.recalculate(this.editForm.weight, this.editForm.height, this.editForm.yob);
      const updatedPerson = {
        ...this.editForm,
        age: stats.age,
        bmi: stats.bmi,
        category: stats.category
      };
      this.$emit('update', updatedPerson);
      this.isEditing = false;
    },
    submitPatch() {
      const stats = this.recalculate(this.patchForm.weight, this.patchForm.height, this.person.yob);
      const patchData = {
        id: this.person.id,
        weight: Number(this.patchForm.weight),
        height: Number(this.patchForm.height),
        bmi: stats.bmi,
        category: stats.category
      };
      this.$emit('patch', patchData);
      this.isPatching = false;
    }
  }
}
</script>
