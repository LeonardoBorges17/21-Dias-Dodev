class Setup {
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    SSD
        constructor(tipo, processador, video, armazenamento, memoriaRam, ssd) {
            this.Tipo = tipo
            this.Processador = processador
            this.Video = video
            this.Armazenamento = armazenamento
            this.MemoriaRam = memoriaRam
            this.SSD = ssd
        }

exibirInformacoes() {
    console.log("Informações do setup");
    console.log(`Tipo: ${this.Tipo}`);
    console.log(`Procesador: ${this.Processador}`);
    console.log(`Video: ${this.Video}`);
    console.log(`Armazenamento: ${this.Armazenamento}`);
    console.log(`Memoria Ram: ${this.MemoriaRam}`);
    console.log(`SSD: ${this.SSD}`);
}
}

const meuSetup = new Setup("Notebook", "I5 13°", "Integrado", "512Gb", "16Gb ram", true)
meuSetup.exibirInformacoes()