export default function PageHeader() {
    return (
        <section className="px-6 py-4 backdrop-blur-sm">
            <p className="text-md">Hello Adrian</p>
            <h2 className="text-2xl">
                Today is sunny
            </h2>
            <h2 className="text-2xl font-extrabold">
                Can i help you today?
            </h2>
            <div className="inline-flex items-center px-4 py-1.5 mt-2 bg-green-400 border border-black text-black rounded-2xl text-sm font-medium">
                <p>Emergency</p>
            </div>
        </section>
    );
}
