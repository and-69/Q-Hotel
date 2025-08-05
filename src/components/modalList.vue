<template>
    <q-dialog v-model="listModel">
        <q-card class="menu-card">
            <q-card-section class="menu-header">
                <div class="text-h6 menu-title">{{ title }}</div>
            </q-card-section>

            <div class="scroll-container">
                <q-card-section class="menu-content">
                <div v-for="(section, index) in menuSections" :key="index" class="menu-section">
                    <h3 class="section-title">
                        <span class="section-icon">{{ section.icon }}</span>
                        {{ section.title }}
                    </h3>
                    <ul class="item-list">
                        <li v-for="(item, itemIndex) in section.items" :key="itemIndex" class="menu-item">
                            <div class="item-content">
                                <strong class="item-name">{{ item.name }}</strong>
                                <span class="item-description">{{ item.description }}</span>
                                <span v-if="item.price" class="item-price">{{ item.price }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </q-card-section>
            </div>
            

            <q-card-actions align="right" class="menu-actions">
                <q-btn flat label="Cerrar" v-close-popup class="close-btn" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    menuSections: {
        type: Array,
        required: true,
        validator: (value) => {
            return value.every(section =>
                section.title && section.icon && Array.isArray(section.items)
            )
        }
    }
})

const emit = defineEmits(['update:modelValue'])

const listModel = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
})

</script>

<style scoped>
.menu-card {
  background: #fff9f0;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  font-family: 'Playfair Display', serif;
  display: flex;
  flex-direction: column;
  max-height: 80vh; /* Altura máxima del modal */
  width: 700px;
  max-width: 80vw;
}
.scroll-container{
    overflow-y: auto;
}
.menu-header {
  background: #5e00b6;
  color: white;
  padding: 20px;
  text-align: center;
}

.menu-title {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0;
}

.menu-content {
  padding: 25px;
  background: linear-gradient(to bottom, #fff9f0, #fff);
}

.menu-section {
  margin-bottom: 30px;
  border-bottom: 1px dashed #e67e22;
  padding-bottom: 20px;
}

.menu-section:last-child {
  border-bottom: none;
}

.section-title {
  color: #5e00b6;
  font-size: 1.4rem;
  margin: 0 0 15px 0;
  display: flex;
  align-items: center;
  font-weight: 600;
}

.section-icon {
  margin-right: 10px;
  font-size: 1.6rem;
}

.item-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f0e6d2;
}

.menu-item:last-child {
  margin-bottom: 0;
  border-bottom: none;
}

.item-content {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
}

.item-name {
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
  grid-column: 1 / span 2;
}

.item-description {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  grid-column: 1;
}

.item-price {
  color: #e67e22;
  font-weight: 700;
  font-size: 1.1rem;
  grid-column: 2;
  grid-row: 2;
  text-align: right;
}

.menu-actions {
  background: #f8f3e6;
  padding: 15px 25px;
}

.close-btn {
  color: #5e00b6;
  font-weight: 600;
  padding: 8px 20px;
}


.menu-item:hover .item-name {
  color: #5e00b6;
  transition: color 0.3s ease;
}

.close-btn:hover {
  background: rgba(94, 0, 182, 0.1) !important;
}
</style>