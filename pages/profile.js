import React, { useEffect, useState } from "react";
import { Header, ScoreCard, Loader } from "@/components";
import Image from "next/image";
import { useAuth } from '@/context/AuthContext.jsx';
import { getScore } from '@/services';

const Profile = () => {
    const auth = useAuth();
    const user = auth.user;
    const [scores, setScores] = useState([]);

    useEffect(() => {
        if (user) {
            getScore(user.email).then((data) => {
                setScores(data[0]);
            });
        }
    }, [user]);

    if (!user || !scores) {
        return <Loader />;
    }

    // console.log(scores);
    // console.log(scores.architecture);
    // console.log(scores.history);
    // console.log(scores.art);

    return (
        <>
            <Header slug={"/"} />
            <div className="container mx-auto px-6 md:px-0">
                <div className="grid grid-cols-1">
                    <div className="flex justify-center py-6">
                        <span className="text-5xl md:text-4xl lg:text-5xl font-semibold mb-4 text-dark-slate-blue">
                            Perfil de usuario
                        </span>
                    </div>

                    <div className="grid grid-cols-3 w-full rounded-3xl bg-cream-primary">
                        <div className="col-span-1 py-24 px-4">
                            <Image
                                src={user.photoURL ? user.photoURL : "/profileIcon.png"}
                                className="border border-8 border-dark-slate-blue align-middle mx-6 font-semibold rounded-full my-2"
                                alt="profile"
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="col-span-2 py-12">
                            <div className="flex justify-center pt-2 px-4">
                                <span className="text-lg md:text-lg lg:text-3xl font-semibold text-dark-slate-blue">
                                    {user.displayName}
                                </span>
                            </div>
                            <div className="flex justify-center px-4 mb-8">
                                <span className="text-lg md:text-lg lg:text-xl mb-4 text-dark-slate-blue py-2">
                                    {user.email}
                                </span>
                            </div>

                            <div className="flex justify-center align-center py-2 px-4 mb-4">
                                <span className="text-lg md:text-lg lg:text-3xl px-12 py-4 rounded-full font-semibold text-cream-primary bg-dark-slate-blue">
                                    Tu progreso
                                </span>
                            </div>

                            <div className="grid grid-cols-3">
                                <div className="col-span-1"><ScoreCard correctAnswers={scores.history} section={'Historia'}/></div>
                                <div className="col-span-1"><ScoreCard correctAnswers={scores.architecture} section={'Arquitectura'}/></div>
                                <div className="col-span-1"><ScoreCard correctAnswers={scores.art} section={'Arte'}/></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

const pages = [
    {
        name: "Coliseo",
        description: "Descubre la historia del gran Coliseo de Roma",
        image: "/carrusel/colosseum.png",
        slug: "/architecture/colosseum",
    },
    {
        name: "Panteón",
        description: "Descubre la historia del gran Panteón de Roma",
        image: "/carrusel/pantheon.png",
        slug: "/architecture/pantheon",
    },
];

export default Profile;
