async function cadastrar(event) {
            event.preventDefault()
        
            const nome = document.getElementById('nome').value;
            const dia = document.getElementById('placa').dia;
            const locall = document.getElementById('locall').value;
            const descricao = document.getElementById('descricao').value;
        
        
            const data = {
                nome,
                dia,
                locall,
                descricao
            }
        
        
            try {
                const response = await fetch('http://localhost:3002/eventos', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
        
        
                const results = await response.json();
        
        
                if (results.success) {
                    console.log(results)
                    alert(results.message)
                    window.location.assign('index.html')
                } else {
                    alert(results.message)
                }
            }
            catch (error) {
                console.log(error);
            }
        }