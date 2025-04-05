async function loadEvento() {
            try {
            const response = await fetch('http://localhost:3002/eventosListar');
            const data = await response.json();
            const tbody = document.getElementById('listEvent');
            tbody.innerHTML = '';
        
            if (data.success && data.data) {
                data.data.forEach(eventos => {
                    const linha = document.createElement('div');
                    linha.classList.add('carro-item');
                    linha.innerHTML = `
                        <div class="titulos">
                            <h2 class="carro-inf">${eventos.nome}</h2>
                            <h2 class="carro-inf">${eventos.dia}</h2>
                            <h2 class="carro-inf">${eventos.locall}</h2>
                            <h2 class="carro-inf">${eventos.descricao}</h2>
                        </div>
                        <div class="post-actions">
                            <button class="botao" onclick="editEvento(${eventos.id})">Editar</button>
                            <button class="botao" onclick="deleteEvento(${eventos.id})">Deletar</button>
                        </div>
                        <hr>
                    `;
                    tbody.appendChild(linha);
                });
            }
        } catch (error) {
            console.error("Erro ao carregar eventos", error);
        };
        
        }
        
        
        
        // Editar cadastro dos eventos
        async function editEvento(id) {
            const nome = prompt("Novo nome (manter o mesmo)");
            const dia = prompt("Nova data (manter a mesma)");
            const locall = prompt("Novo localo (manter o mesmo)");
            const descricao = prompt("Nova descrição (adicionar a descrição)")
        
            await fetch(`http://localhost:3002/eventos/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, dia, locall, descricao })
            });
        
            await loadEvento();
        }
        
        // Deletar eventos
        
        async function deleteEvento(id) {
            await fetch(`http://localhost:3002/eventos/${id}`, {
                method: 'DELETE'
            });
            await loadEvento();
        }
        
        loadEvento();
        