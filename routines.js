// Rutinas de calistenia: datos compartidos por ejercicio.html y entrenar.html.
// rest = [mín, máx] de descanso en segundos después de cada superserie.
window.ROUTINES = {
 A: { name: 'Muscle-up · Potencia', blocks: [
  { title: 'Técnica + piernas', rounds: 3, rest: [90, 150], items: [
    { name: 'Muscle-up sin banda', reps: '2–3', cue: 'Transición limpia; evita el fallo.' },
    { name: 'Sentadilla búlgara', reps: '8–10/lado' } ] },
  { title: 'Fuerza', rounds: 3, rest: [60, 90], items: [
    { name: 'Flexiones en anillas', reps: '8–12' },
    { name: 'Peso muerto rumano', reps: '8–12' } ] },
  { title: 'Complementarios', rounds: 2, rest: [60, 90], items: [
    { name: 'Remo en anillas', reps: '8–12' },
    { name: 'Elevación de piernas colgado', reps: '8–12' } ] } ] },
 B: { name: 'Handstand · Empuje', blocks: [
  { title: 'Técnica + piernas', rounds: 3, rest: [120, 150], items: [
    { name: 'Negativas de HSPU', reps: '2–4', cue: 'Pared; descenso controlado 3–5 s.' },
    { name: 'Sentadilla goblet', reps: '10–15' } ] },
  { title: 'Fuerza', rounds: 3, rest: [75, 120], items: [
    { name: 'Dominadas L-sit', reps: '5–8', cue: 'Mantén piernas elevadas; tuck si cedes.' },
    { name: 'Peso muerto rumano unilateral', reps: '8–10/lado' } ] },
  { title: 'Complementarios', rounds: 2, rest: [75, 120], items: [
    { name: 'Fondos en paralelas', reps: '6–10' },
    { name: 'Remo en anillas', reps: '8–12' } ] } ] },
 C: { name: 'Front lever · Tracción', blocks: [
  { title: 'Técnica + piernas', rounds: 3, rest: [90, 150], items: [
    { name: 'Tuck front lever row', reps: '3–6', cue: 'Cadera alta; tronco estable.' },
    { name: 'Zancadas inversas', reps: '8–10/lado' } ] },
  { title: 'Fuerza', rounds: 3, rest: [90, 120], items: [
    { name: 'Dominadas estrictas', reps: '6–10' },
    { name: 'Fondos en paralelas', reps: '6–10' } ] },
  { title: 'Complementarios', rounds: 2, rest: [60, 90], items: [
    { name: 'Peso muerto rumano', reps: '8–12' },
    { name: 'Pike push-ups', reps: '6–10' } ] } ] }
};
