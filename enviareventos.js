document.getElementById("eventoForm").addEventListener('submit', async (e) => {
            e.preventDefault();
        
            const nome = document.getElementById('nome').value;
            const dia = document.getElementById('dia').value;
            const locall = document.getElementById('locall').value;
            const descricao = document.getElementById('descricao').value;
        
            await fetch('http://localhost:3002/eventos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, dia, locall, descricao })
            });
        
            document.getElementById('eventoForm').reset(); 
            loadEvento(); 
            
        });