const linea = {
    labels: ["Lunes 25/08", "Martes 26/08", "Miércoles 27/08", "Jueves 28/08", "Viernes 29/08", "Sábado 30/08", "Domingo 31/08"],
    datasets: [
        {
            label: "Avisos de Adopción",
            data: [2, 3, 1, 4, 2, 5, 3],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            fill: true,
            tension: 0.1,
            pointBackgroundColor: "rgba(75, 192, 192, 1)",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointRadius: 5,
        }
    ]
};

const torta = {
    labels: ["Perros", "Gatos"],
    datasets: [
        {
            label: "Tipos de Mascotas",
            data: [30, 50],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)"
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)"
            ],
            borderWidth: 1,
            hoverOffset: 4
        }
    ]
};

const barra = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
        {
            label: "Gatos",
            data: [5, 10, 15, 20, 25, 30],
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1,
            borderRadius: 5,
        },
        {
            label: "Perros",
            data: [10, 15, 20, 25, 30, 35],
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            borderColor: "rgba(255, 159, 64, 1)",
            borderWidth: 1,
            borderRadius: 5,
        }
    ]
};

const graficoLinea = {
    type: "line",
    data: linea,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Avisos de Adopción por Día'
            },
            legend: {
                display: false,
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Días'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Cantidad de Avisos'
                },
                beginAtZero: true
            }
        },
        elements: {
            point: {
                hoverRadius: 8
            }
        }
    }
};

const graficoTorta = {
    type: "pie",
    data: torta,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Tipos de Mascotas en Adopción'
            },
            legend: {
                position: 'top',
            }
        }
    }
};

const graficoBarra = {
    type: "bar",
    data: barra,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Comparación Gatos y Perros por Mes'
            },
            legend: {
                position: 'top',
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Meses'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Cantidad de Avisos'
                },
                beginAtZero: true
            }
        },
        elements: {
            bar: {
                borderWidth: 2
            }
        }
    }
};

const crearGrafico = () => {
    const ctxLinea = document.getElementById('graficoLineas').getContext('2d');
    const ctxTorta = document.getElementById('graficoTorta').getContext('2d');
    const ctxBarra = document.getElementById('graficoBarras').getContext('2d');

    new Chart(ctxLinea, graficoLinea);
    new Chart(ctxTorta, graficoTorta);
    new Chart(ctxBarra, graficoBarra);
}

let volverPortadaBtn = document.getElementById('volver-portada-btn');
const volverPortada = () => {
    window.location.href = 'tarea1html.html';
};
volverPortadaBtn.addEventListener("click", volverPortada);

window.addEventListener("load", crearGrafico);