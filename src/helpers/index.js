// Creamos array con los meses del año
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
// Creamos array con los días de la semana
const dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
// Creamos el objeto fecha instanciándolo con la clase Date
const fecha = new Date();
// Construimos el formato de salida
export const fechaActual = dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear();

export const fechaNueva = dateNew =>{
    const fecha = new Date(dateNew);
    const withPmAm = fecha.toLocaleTimeString('es-US', {
        // en-US can be set to 'default' to use user's browser settings
        hour: '2-digit',
        minute: '2-digit',
      });
    
    return dias_semana[fecha.getDay()] +' '+withPmAm;
}