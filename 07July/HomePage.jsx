function HomePage() {
    let a = 1;
    for (let i = 0; i < 1e6; i++)
        for (let j = 0; j < 10; j++)
            a = 1;

    return <h1>Привет!</h1>;
}

export default HomePage