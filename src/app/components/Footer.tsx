export default function Footer() {
  return (
    <footer className="w-full bg-[#000c27] text-white">
      <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Contato */}
        <div className="space-y-1 text-center text-sm md:text-left">
          <p className="font-semibold">Contato</p>
          <p>Email: muriloalessioamaral@gmail.com</p>
          <p>Tel: (13) 99122-0890</p>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center md:text-right">
          © 2025 Murilo. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}
