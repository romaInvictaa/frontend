// Funcion para traer la puntuacion de un usuario en la base de datos

const GET_SCORE_URL = "/api/score";

export const getScore = async (email) => {
    const response = await fetch(`${GET_SCORE_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user_email: email,
        }),
    });
    const data = await response.json();
    return data;
}
