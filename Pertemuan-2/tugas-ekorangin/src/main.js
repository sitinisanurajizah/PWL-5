let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center`;
   task.innerHTML = `
         <p class="text-lg">${title}</p>
         <div>
            <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                   class="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-700 cursor-pointer">
            <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                   class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 cursor-pointer">
         </div>
   `;
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}
