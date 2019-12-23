// Learn more about F# at http://fsharp.org

open canopy.runner.classic
open canopy.classic
open System

canopy.configuration.chromiumDir <- System.AppContext.BaseDirectory


"INGRESAR AL SITIO WEB" &&& fun _->   
    start chrome
    url "http://yavirac.edu.ec/web/"

"ACCEDER A LA INFORMACION DE NUESTRA CARRERA" &&& fun _->
    press down
    press down
    press down
    press down
    press down
    press down
    press down
    press down
    press down
    press down

    sleep 15

    click ".wp-image-3896.size-medium.aligncenter"


[<EntryPoint>]
let main _= 
    run()    
    
    printf "Preciona [Intro] para salir"  
    Console.ReadLine() |> ignore
    quit()
    0 