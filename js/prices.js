 async function loadServices() {
            const table = document.getElementById("servicesTable");

            try {
                const res = await fetch("https://www.creantunegocio.com/api/services");
                const data = await res.json();

                table.innerHTML = "";

                data.services.forEach(s => {
                    table.innerHTML += `
<tr>
<td><img class="icon" src="${s.icon || 'https://via.placeholder.com/45'}"></td>
<td><b>${s.service}</b></td>
<td>${s.description || "Professional lawn service"}</td>
<td class="price">$${s.price}</td>
</tr>`;
                });

            } catch (e) {
                table.innerHTML = '<tr><td colspan="4">Error loading services</td></tr>';
            }
        }

        loadServices();