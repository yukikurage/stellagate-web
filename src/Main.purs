module Main where

import Prelude

import Data.Foldable (traverse_)
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Class (liftEffect)
import Jelly.Aff (awaitBody)
import Jelly.Component (Component, raw, text)
import Jelly.Element as JE
import Jelly.Hooks (runHooks_)
import Jelly.Hydrate (mount)
import Jelly.Prop ((:=), (@=))
import Jelly.Signal (Signal)

main :: Effect Unit
main = launchAff_ do
  bodyMaybe <- awaitBody
  liftEffect $ traverse_ (runHooks_ <<< mount component) bodyMaybe

component :: forall m. Component m
component = do
  JE.div [ "class" := "fixed w-screen h-screen overflow-auto text-stella-gray-400" ] do -- 一番外側
    JE.div [ "class" := "flex w-full h-fit flex-col items-center" ] do -- メイン + フッター
      JE.div [ "class" := "relative w-full min-h-screen h-fit flex flex-col gap-12 items-center justify-center py-32" ] do -- メイン
        frameComponent -- メインのフレーム
        JE.img [ "src" := "/img/icon.png", "class" := "w-24 rendering-pixelated" ] -- アイコン
        JE.img [ "src" := "/img/title.png", "class" := "w-96 rendering-pixelated" ]
        JE.div [ "class" := "flex flex-col items-center gap-8" ] do
          mainLink (pure "https://yukikurage.itch.io/stellagate") do
            JE.div [ "class" := "flex flex-col items-center" ] do
              JE.div [ "class" := "text-3xl" ] do
                text "Itch.io"
              JE.div' do
                text "Free trial!"
          mainLink (pure "https://store.steampowered.com/app/2721030/Stellagate/") do
            JE.div [ "class" := "flex flex-col items-center" ] do
              JE.div [ "class" := "text-3xl" ] do
                text "Steam"
              JE.div' do
                text "Add to wishlist!"
        -- youtube
        JE.div [ "class" := "py-3" ] do
          raw
            """
<iframe width="480" height="270" src="https://www.youtube.com/embed/zIu0SpOYV7Q?si=mNCM8UJdZWFo76Fp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
"""
    footerComponent

frameComponent :: forall m. Component m
frameComponent = do
  JE.div [ "class" := "absolute left-0 top-0 right-0 bottom-0 bg-stella-gray-400 p-5 -z-50" ] do
    JE.div [ "class" := "relative w-full h-full flex flex-col items-center bg-stella-gray-100 -z-40" ] do
      JE.img [ "src" := "/img/frame.png", "class" := "absolute top-0 left-0 w-48 rendering-pixelated" ]
      JE.img [ "src" := "/img/frame.png", "class" := "absolute top-0 right-0 w-48 rendering-pixelated transform -scale-x-100" ]
      JE.img [ "src" := "/img/frame.png", "class" := "absolute bottom-0 left-0 w-48 rendering-pixelated transform -scale-y-100" ]
      JE.img [ "src" := "/img/frame.png", "class" := "absolute bottom-0 right-0 w-48 rendering-pixelated transform -scale-x-100 -scale-y-100" ]

mainLink :: forall m. Signal String -> Component m -> Component m
mainLink href children = do
  JE.a [ "href" @= href, "class" := "group relative", "target" := "_blank" ] do
    JE.img [ "src" := "/img/arrow-right.png", "class" := "absolute w-12 top-1/2 -translate-y-1/2 -left-3 -translate-x-full rendering-pixelated invisible group-hover:visible" ]
    JE.img [ "src" := "/img/arrow-left.png", "class" := "absolute w-12 top-1/2 -translate-y-1/2 -right-3 translate-x-full rendering-pixelated invisible group-hover:visible" ]
    children

footerComponent :: forall m. Component m
footerComponent = do
  JE.div [ "class" := "bg-stella-gray-400 h-fit pt-2 pb-8 px-5 text-stella-gray-100" ] do
    JE.p [] do
      JE.a [ "href" := "https://x.com/stellagate_traP", "class" := "underline hover:text-stella-gray-200 transition-colors", "target" := "_blank" ] do
        text "Team Stellagate"
      text ", "
      JE.a [ "href" := "https://x.com/traPtitech", "class" := "underline hover:text-stella-gray-200 transition-colors", "target" := "_blank" ] do
        text "traP"
      text " 2024-2024"
