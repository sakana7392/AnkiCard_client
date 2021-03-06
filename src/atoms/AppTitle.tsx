import { BookOpenIcon } from "@heroicons/react/outline";

export const AppTitle=()=>{
    return(
        <>
            <h1 className="font-mono text-8xl text-slate-700 mt-20">
                分散学習<br/>
                Card
            </h1>
            <BookOpenIcon className="h-1/4 w-1/4 m-auto text-white"/>
        </>
    );
}