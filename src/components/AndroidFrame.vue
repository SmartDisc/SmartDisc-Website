<script setup>
defineProps({
  width: { type: Number, default: 412 },
  height: { type: Number, default: 892 },
  dark: Boolean,
})
</script>

<template>
  <div :style="{
    width: width+'px', height: height+'px', borderRadius:'18px', overflow:'hidden',
    background: dark ? '#1d1b20' : '#f4fbf8',
    border: '8px solid rgba(116,119,117,0.5)',
    boxShadow:'0 30px 80px rgba(0,0,0,0.25)',
    display:'flex', flexDirection:'column', boxSizing:'border-box',
  }">
    <!-- status bar -->
    <div :style="{
      height:'40px', display:'flex', alignItems:'center',
      justifyContent:'space-between', padding:'0 16px',
      fontFamily:'Roboto, system-ui, sans-serif',
    }">
      <span :style="{ fontSize:'14px', fontWeight:400, letterSpacing:'0.25px', lineHeight:'20px', color: dark ? '#fff' : '#171d1b' }">9:30</span>
      <div :style="{ position:'absolute', left:'50%', top:'8px', transform:'translateX(-50%)', width:'24px', height:'24px', borderRadius:'100px', background:'#2e2e2e' }" />
      <div :style="{ display:'flex', alignItems:'center', gap:'4px' }">
        <svg width="16" height="16" viewBox="0 0 16 16">
          <path d="M8 13.3L.67 5.97a10.37 10.37 0 0114.66 0L8 13.3z" :fill="dark ? '#fff' : '#171d1b'"/>
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16">
          <path d="M14.67 14.67V1.33L1.33 14.67h13.34z" :fill="dark ? '#fff' : '#171d1b'"/>
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16">
          <rect x="3.75" y="2" width="8.5" height="13" rx="1.5" :fill="dark ? '#fff' : '#171d1b'"/>
          <rect x="5.5" y="0.9" width="5" height="2" rx="0.5" :fill="dark ? '#fff' : '#171d1b'"/>
        </svg>
      </div>
    </div>
    <!-- content -->
    <div :style="{ flex:1, overflow:'auto' }"><slot /></div>
    <!-- gesture bar -->
    <div :style="{ height:'24px', display:'flex', alignItems:'center', justifyContent:'center' }">
      <div :style="{ width:'108px', height:'4px', borderRadius:'2px', background: dark ? '#fff' : '#171d1b', opacity:0.4 }" />
    </div>
  </div>
</template>
