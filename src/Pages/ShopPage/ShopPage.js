import React from 'react';

import Breadcrumb from "../../Components/Breadcrumber/Breadcrumb";
import Navigation from "../../Components/Navigation/Navigation";
import ShopItem from "../../Pages/ShopPage/ShopItem/ShopItem";
import ShopItemDetail from "../../Pages/ShopPage/ShopItemDetail/ShopItemDetail";
import {trs} from "../../translations";

import "./ShopPage.css";

//Shop images for presentation
import cap from "../../assets/shop/cap.png";
import mug from "../../assets/shop/mug.png";
import bag from "../../assets/shop/bag.png";
import keyChain from "../../assets/shop/keychain.png";
import pen from "../../assets/shop/pen.png";
import umbrella from "../../assets/shop/umbrella.png";
import shirt from "../../assets/shop/shirt.png";
import flashDisk from "../../assets/shop/flash_disk.png";

import {useSelector} from "react-redux";

function getMockData() {
    let data = [];
    let id = 1;

    function add(imgPath, title, postage, price, summary, content) {
        if (typeof postage === "undefined")
            postage = "od 120,- Kč";
        if (typeof summary === "undefined")
            summary = "419,- Kč";
        if (typeof price === "undefined")
            price = 299;
        if (typeof content === "undefined")
            content = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. " +
                "Nam sed tellus id magna elementum tincidunt. Nulla non lectus sed nisl molestie malesuada. Integer pellentesque quam vel velit. Proin in tellus sit amet nibh dignissim sagittis." +
                " Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Nullam faucibus mi quis velit. Ut tempus purus at lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean fermentum risus id tortor. Maecenas sollicitudin. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Quisque tincidunt scelerisque libero. Donec iaculis gravida nulla. " +
                "Integer imperdiet lectus quis justo. Aliquam ornare wisi eu metus. Nullam rhoncus aliquam metus. Fusce aliquam vestibulum ipsum.\n" +
                "\n" +
                "In dapibus augue non sapien. Fusce suscipit libero eget elit. Sed ac dolor sit amet purus malesuada congue. " +
                "Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Quisque porta. Aliquam in lorem sit amet leo accumsan lacinia. Donec quis nibh at felis congue commodo. Suspendisse nisl. Praesent id justo in neque elementum ultrices. Aliquam id dolor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. " +
                "Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Aliquam id dolor. Duis risus. Etiam dictum tincidunt diam. Duis risus. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. In sem justo, commodo ut, suscipit at, pharetra vitae, orci.";

        data.push({
            id: id,
            imgPath: imgPath,
            title: title,
            postage: postage,
            summary: summary,
            price: price,
            content: content,
        });
        id++;
    }

    add(cap, 'Černá kšiltovka UNISEX');
    add(pen, "Růžová propiska s kamínky Swarovski");
    add(mug, "Termohrnek - růžový, 330 ml");
    add(umbrella, "Černý deštník s kočkami");
    add(bag, "Černý batoh");
    add(shirt, 'Neviditelné tričko pod košili - pánské');
    add(keyChain, "Klíčenka „švýcarák“");
    add(flashDisk, "Flash disk 64 GB");
    return data;
}

function ShopPage(page) {
    const language = useSelector(state => state.language.lang); // Also defined to re-render component on language change
    const locale = language === "cz" ? "cs-CZ" : "en-US";
    const data = getMockData();
    let heading = trs("E_SHOP");
    let breadCrumbs = [{to: '/', label: trs("HOMEPAGE")}, {to: '/e-shop', label: trs("E_SHOP")}];

    let content = data.map((item, i) => {
        return (
            <ShopItem data={item} key={i} lang={language}/>
        );
    });

    if (typeof page.match.params.id !== "undefined") {
        const item = data.filter(row => row.id === parseInt(page.match.params.id))[0];

        if (item) {
            content = <ShopItemDetail data={item} lang={language} locale={locale}/>;
            heading = item.title;
            breadCrumbs.push({to: '#', label: item.title});
        }
    }
    return (
        <>
            <Navigation/>
            <main className="e-shop-page wrapper layout-main">
                <Breadcrumb items={breadCrumbs}/>
                <h1 className="page-header">{heading}</h1>
                <div className="e-shop-page__sections__wrapper">
                    <section className="shop-items-wrapper">
                        {content}
                    </section>
                </div>
            </main>
        </>
    );
}

export default ShopPage;