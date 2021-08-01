import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Event from '../../components/Event';
import styles from './index.module.css';

const episodes = [
    ["Asakura_Mihono_Episodes", "thumb_mihono", "", "Asakura Mihono Episodes",],
    ["Setouchi_Chie_Episodes", "thumb_chie", "", "Setouchi Chie Episodes",],
    ["Shichinosato_Kofuki_Episodes", "thumb_kofuki", "", "Shichinosato Kofuki Episodes",],
    ["Musumi_Kiyoka_Episodes", "thumb_kiyoka", "", "Musumi Kiyoka Episodes",],
    ["Kitora_Mirja_Episodes", "thumb_miruya", "", "Kitora Mirja Episodes",],
    ["Yamashiro_Yui_Episodes", "thumb_yui", "", "Yamashiro Yui Episodes",],
    ["Etou_Kanami_Episodes", "thumb_kanami", "", "Etou Kanami Episodes",],
    ["Juujou_Hiyori_Episodes", "thumb_hiyori", "", "Juujou Hiyori Episodes",],
    ["Yanase_Mai_Episodes", "thumb_mai", "", "Yanase Mai Episodes",],
    ["Itomi_Sayaka_Episodes", "thumb_sayaka", "", "Itomi Sayaka Episodes",],
    ["Mashiko_Kaoru_Episodes", "thumb_kaoru", "", "Mashiko Kaoru Episodes",],
    ["Kohagura_Ellen_Episodes", "thumb_eren", "", "Kohagura Ellen Episodes",],
    ["Origami_Yukari_Episodes", "thumb_yukari", "", "Origami Yukari Episodes",],
    ["Shidou_Maki_Episodes", "thumb_maki", "", "Shidou Maki Episodes",],
    ["Konohana_Suzuka_Episodes", "thumb_suzuka", "", "Konohana Suzuka Episodes",],
    ["Satsuki_Yomi_Episodes", "thumb_yomi", "", "Satsuki Yomi Episodes",],
    ["Tsubakuro_Yume_Episodes", "thumb_yume", "", "Tsubakuro Yume Episodes",],
    ["Hiiragi_Kagari_Episodes", "thumb_kagari", "", "Hiiragi Kagari Episodes",],
    ["Fujiwara_Minato_Episodes", "thumb_minato", "", "Fujiwara Minato Episodes",],
    ["Ban_Tsugumi_Episodes", "thumb_tsugumi", "", "Ban Tsugumi Episodes",],
    ["Iwakura_Sanae_Episodes", "thumb_sanae", "", "Iwakura Sanae Episodes",],
    ["Inago_Akira_Episodes", "thumb_akira", "", "Inago Akira Episodes",],
    ["Inami_Suu_Episodes", "thumb_suu", "", "Inami Suu Episodes",],
    ["Nitta_Hirona_Episodes", "thumb_hirona", "", "Nitta Hirona Episodes",],
]

function Episodes() {
    return (
        <Layout
            title={'Episodes'}>
                <main className={"main"}>
                <h1 className={styles.title}>Episodes</h1>
                <Event events={episodes} newestFirst={true} type={"episodes"}/>
                </main>
        </Layout>        
    )
}

export default Episodes