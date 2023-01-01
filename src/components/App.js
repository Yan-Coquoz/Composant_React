/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  InputText,
  Modale,
  Button,
  DatePicker,
  InputNumber,
  SelectField,
  Scrollbar,
} from "../lib/index";
import { depts, etats } from "../Datas";
import "./style.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  //test de tableaux avec optGroup
  const tab1 = ["red", "blue", "green"];
  const tab2 = ["short", "coat", "socket", "shoes"];
  const tab3 = ["moto", "car", "boat"];

  const mesTableaux = [
    { colors: [...tab1] },
    { clothes: [...tab2] },
    { vehicle: [...tab3] },
  ];

  const selectTest = {
    options: mesTableaux,
    idName: "tableau",
    labelName: "mes tableaux",
    onChange: handleSelect,
    toUpperCase: true,
    group: true,
    optValue: true,
    isRequired: true,
  };

  const selectDep = {
    options: depts,
    idName: "department",
    labelName: "department",
    onChange: handleSelect,
    toUpperCase: true,
    optValue: true,
    isRequired: true,
  };

  const selectState = {
    options: etats,
    idName: "state",
    labelName: "state",
    toUpperCase: true,
    optValue: true,
    isRequired: false,
    onChange: handleSelect,
  };

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleChangeInput(name, value) {
    console.log(name, value);
  }

  function handleSelect(evt) {
    console.log("Dans handleSelect :", evt.target.name, evt.target.value);
  }

  function handleSendForm(evt) {
    evt.preventDefault();
    const selectDepart = evt.target[2].value;

    // DATAFORM
    const form = evt.target;
    console.log(form);
    const dataForm = new FormData(form);
    const dateFORM = dataForm.get("dateOfBirth");
    console.log("dateForm => ", dateFORM);

    form.reset();

    // fin DataForm

    const datas = [];
    const propris = [];
    const values = [];
    if (propris.length === values.length) {
      for (let i = 0; i < evt.target.length - 3; i++) {
        // -3 target renvoi un tableau des elements du form dont le bouton(*2).
        propris.push(evt.target[i].name);
        values.push(evt.target[i].value);
      }

      for (let i = 0; i < values.length; i++) {
        datas.push({ [propris[i]]: values[i] });
      }
    }

    if (selectDep.isRequired) {
      if (selectDepart.toLowerCase() !== "options") {
        console.log("xxx ", selectDepart);
      } else {
        console.warn("Select a value");
      }
    }
  }
  const scrollBarOptions = {
    barColor: "rgba(3, 83, 255, 0.8)",
    barHeight: 5,
    barOpacity: true,
  };

  return (
    <div>
      <Scrollbar {...scrollBarOptions} />
      <h1>Hello Test</h1>
      <form onSubmit={handleSendForm}>
        <fieldset>
          <legend>Select</legend>
          <SelectField {...selectTest} />
          <SelectField {...selectDep} />
          <SelectField {...selectState} />
        </fieldset>
        {/* <br />
        <fieldset>
          <legend>Input</legend>
          <InputText
            idName={"firstname"}
            labelName={"prénom"}
            isRequired={false}
            sendValue={handleChangeInput}
            myClass={"input_text"}
            toUpperCase={true}
          />

          <InputNumber
            idName="testnumber"
            labelName={"test de nombre"}
            toUpperCase={true}
            // mini={10000}
            // maxi={99999}
            isRequired={false}
          />
        </fieldset>
        <br />
        <fieldset>
          <legend>Date</legend>
          <DatePicker
            idName={"dateOfBirth"}
            isRequired={true}
            labelName={"date of birth"}
            toUpperCase={true}
            lang={"en"}
            placeholder={"date"}
          />
        </fieldset> */}

        <br />
        <button type="submit">send</button>
      </form>
      <div>
        <Button type="button" onClick={handleOpenModal}>
          Open Modale
        </Button>
        <br />

        <Modale
          message="Hello World !!!"
          open={isOpen}
          onClose={() => setIsOpen(!isOpen)}
        />
      </div>
      scroll bar React
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, velit
        ducimus aut doloremque culpa quos magni quo nostrum libero praesentium,
        ipsa nesciunt. Error voluptatem in labore esse minima amet, ea placeat
        nam architecto perspiciatis! Rem iure error fugiat doloremque, ad
        deleniti nisi, corrupti neque repudiandae commodi nihil ab quibusdam a
        dignissimos itaque, veritatis nam laboriosam molestiae? Assumenda
        consequatur optio veritatis porro saepe, quia fuga sit sunt non ut minus
        blanditiis qui odit ea vel mollitia asperiores nulla praesentium ex
        nostrum! Esse, voluptates ipsum aut quas accusantium ratione, hic soluta
        necessitatibus assumenda ullam perferendis nesciunt enim provident. Vero
        rem ducimus, sed excepturi dolorum, quaerat harum aperiam nam natus ex
        ipsam. Reprehenderit mollitia omnis rerum iure quo ipsum odio amet
        inventore hic nulla eaque excepturi tempore modi recusandae magni,
        numquam nostrum culpa deserunt non cumque ipsam accusamus. Est maiores
        modi odio iste reprehenderit dicta voluptates doloribus ab quis unde,
        eveniet ratione deserunt accusantium aperiam nulla nostrum corrupti hic
        corporis sed nisi? Quos non sunt asperiores, aliquam ipsa adipisci saepe
        exercitationem beatae dignissimos qui architecto, dicta illum, soluta
        voluptatum officiis voluptatem possimus commodi officia cupiditate ex
        iusto eaque eius ipsam quisquam! Ex soluta nam molestias minima itaque
        explicabo voluptatibus deleniti tenetur sed officiis vero, ratione amet,
        provident nisi excepturi ad eveniet reiciendis, est cumque saepe alias
        voluptate at. Ipsa excepturi cum pariatur omnis tenetur facilis magni
        dolores vero quisquam, enim quos reiciendis magnam laudantium inventore
        nulla totam possimus velit quam in repudiandae eveniet? Et nemo
        architecto sit minima porro eos at numquam recusandae autem eveniet qui
        perspiciatis deserunt, earum temporibus adipisci ipsum, beatae rem harum
        unde quam, repudiandae nam ratione? Natus facilis, commodi illum,
        tempora reprehenderit repellat cupiditate doloremque et dignissimos
        explicabo quos voluptatum praesentium molestiae pariatur dolorum illo
        labore atque facere deleniti esse, quia doloribus quo ab. Nemo veritatis
        obcaecati quisquam porro veniam laudantium magnam eum, asperiores
        expedita molestiae hic itaque assumenda, quas consequuntur quia
        mollitia. Praesentium ullam excepturi ipsam? Commodi, veritatis
        asperiores. Veritatis necessitatibus quidem vitae dolor reiciendis
        eveniet et, repellendus quo quas corporis tempora commodi aliquid
        ratione, tenetur sunt sed voluptates laborum facere, maxime ea nisi. Ea
        ducimus excepturi quas temporibus error vero. Autem distinctio qui
        officiis quasi veniam voluptate deleniti, dolorum ipsam. Eligendi velit
        reiciendis nihil. Reprehenderit sunt exercitationem optio velit
        obcaecati adipisci. A quos quas, repellat sunt omnis minus cupiditate?
        Ipsam quibusdam illum placeat. Quisquam, doloribus voluptates nesciunt
        totam ipsum dicta placeat, eligendi voluptatibus quasi debitis at
        repellat doloremque nulla reiciendis atque sint culpa sapiente quidem.
        Cum illum sint ullam magni corrupti. Sapiente quisquam fugit vitae,
        delectus aspernatur illo perferendis provident error placeat nisi quos
        iure odio numquam sit iste eligendi minus sint reiciendis. Fugit officia
        temporibus magni voluptate aperiam ex veritatis commodi corporis
        doloremque necessitatibus iusto recusandae cupiditate enim pariatur,
        neque ipsa, animi assumenda sed nobis, blanditiis quasi eligendi quaerat
        rem praesentium. Ipsum dolore veniam aperiam, vel corrupti repudiandae
        nesciunt ut rem tempora voluptate optio animi laborum quod doloremque
        tenetur iusto aliquid corporis! Voluptatibus iste illum fugiat officia
        saepe deserunt accusamus doloribus, neque molestiae velit voluptates
        modi eum tempore excepturi dolor et maiores debitis aliquid recusandae
        quia aperiam cumque consequatur aut possimus. Quo nisi, illum neque
        natus est, facilis vitae minus tempore nihil beatae ad deleniti? Vitae
        fugit ullam dolores dolor, velit quaerat cumque officiis similique quas
        modi quia recusandae ipsam, maxime perspiciatis molestias. Omnis ad
        quasi quod porro veniam quis asperiores corrupti laudantium quibusdam
        enim maxime, error obcaecati recusandae dolorem hic repudiandae nihil,
        impedit molestias consequatur inventore quia iste? Reiciendis sequi quam
        optio pariatur molestias in aspernatur commodi alias atque dolores harum
        cumque quo dolor sapiente eius doloribus sit quibusdam, quasi vel.
        Accusamus, fugit? Voluptate dolor libero saepe sed amet dolorem. Quis
        laudantium impedit natus voluptate delectus dolor eveniet beatae
        corrupti modi voluptas debitis vero ipsam vitae deserunt odio, sint nam,
        placeat facilis blanditiis. At quibusdam consequuntur sit asperiores
        officia enim odit, maxime cumque et illum voluptate, quam perspiciatis,
        recusandae atque quos! Iusto amet rerum ullam nesciunt culpa enim
        perspiciatis aliquam aperiam porro iure, quos eveniet corporis nemo
        officiis explicabo dolores accusamus doloremque vel! Ut repellat quaerat
        soluta, possimus adipisci impedit! Officia quasi ullam odio laborum
        labore fugiat praesentium, asperiores, optio fugit autem aliquid
        architecto alias. Odit eos provident alias illo illum autem adipisci
        voluptate aut tempora aliquid doloribus assumenda eius id nemo
        consequuntur perspiciatis deleniti consequatur, eum cupiditate officiis
        reprehenderit cumque? Atque illo libero praesentium suscipit
        perspiciatis explicabo architecto minus velit voluptates. Quisquam fugit
        amet ducimus dolor molestiae! Qui ipsam, distinctio molestiae ipsum
        quaerat illum dolorem error maxime laborum necessitatibus laboriosam
        tempora magni, itaque velit. Saepe dolor earum veritatis adipisci,
        eveniet iusto molestias molestiae. Illum itaque molestiae laboriosam
        error dolores in reprehenderit quos eius et impedit omnis autem facilis
        deleniti reiciendis, dicta dolor veniam praesentium repudiandae odit sit
        voluptate pariatur at. Deleniti molestiae, possimus maiores assumenda
        tempore distinctio! Et, molestiae. Ut, a amet minus neque sint aliquam
        molestiae. Numquam, a minima! Aliquid libero rem doloremque ratione
        facilis in velit sit asperiores cumque, beatae, perferendis alias
        deserunt, ducimus aspernatur nam. Aliquid, debitis inventore. Vel
        maiores, natus voluptate hic a recusandae itaque deserunt amet possimus
        error cupiditate unde nemo quis omnis, vitae fugit quia? Repudiandae est
        ea molestiae unde totam. Dolor commodi aliquid, labore non numquam sed
        molestiae a. Tenetur quo dolores quasi quos, nulla temporibus, ad
        explicabo officiis tempore officia illo beatae numquam ullam sit esse
        minus quibusdam aperiam! Quas dolores porro voluptas voluptates
        blanditiis sint architecto similique officia quo dolore doloribus quod
        mollitia ducimus officiis consequuntur nemo, ad eveniet nesciunt nobis
        eos labore facilis eligendi laudantium corporis. Distinctio eum quaerat
        quisquam explicabo consequatur nulla tenetur quae cum. Omnis rerum at
        velit dignissimos nostrum consequuntur iusto nam magni rem saepe!
        Perferendis amet eius facere eaque architecto, id nisi deleniti ullam
        nam aliquid ipsum aut voluptates consectetur aliquam, sed saepe sequi
        tempora dolorum aperiam explicabo? Tenetur incidunt unde facere nulla ex
        fugit neque, facilis beatae illo velit nesciunt necessitatibus dicta
        voluptate modi doloremque consectetur reprehenderit quod deserunt vero
        odio pariatur culpa rem. Modi saepe, nostrum velit assumenda excepturi
        maxime similique, reiciendis provident perspiciatis dolorem fugiat!
        Aperiam, quae! Nesciunt eum quam, ipsum quia esse praesentium beatae
        doloribus molestiae fugit alias asperiores delectus nisi! Eos ducimus
        autem quasi dicta quos hic nam? Similique ipsa deserunt praesentium
        cumque aliquid? Eaque porro tempore architecto beatae et, quibusdam
        facilis ex quod nostrum consequuntur, cupiditate maiores inventore amet
        corrupti totam libero ratione delectus! Modi at excepturi unde delectus
        mollitia cumque consectetur nobis velit perspiciatis consequuntur dolore
        laborum, ullam provident. Accusantium quaerat blanditiis tempora!
        Distinctio voluptatem, optio, magni, sequi reiciendis tenetur ducimus
        aliquam omnis est perferendis consequuntur illo accusantium dolorum.
        Ullam ducimus labore, ab id modi doloribus voluptas libero voluptate
        odio magni! Unde voluptatem quam aliquam sint illum tempore natus veniam
        fugit dolorem atque! Optio aliquid mollitia molestias a maiores earum
        ratione ea deleniti? Nesciunt quidem quaerat dolor cupiditate amet,
        fugiat ab asperiores aut necessitatibus aliquam corrupti repellat quia
        vitae eius, ipsa temporibus dicta eaque nam voluptas culpa rerum
        explicabo accusamus voluptatibus qui. Eius laudantium eos facilis.
        Dolorum quam iste facere fugit error blanditiis dolorem obcaecati
        doloremque atque deserunt natus vitae libero tenetur quaerat
        reprehenderit, quos odit omnis dignissimos est adipisci. Maxime tempore
        eveniet suscipit, sint vitae aspernatur velit reprehenderit accusantium
        fuga, tenetur sed incidunt cumque! Aperiam consequuntur est sed nam
        nobis hic nisi laborum quaerat itaque exercitationem. Aperiam esse porro
        inventore adipisci ea fuga temporibus possimus quos assumenda, dolore
        quis neque. Corrupti sunt beatae dolorem asperiores voluptates fugit
        obcaecati natus, inventore accusantium libero rerum iusto dignissimos
        porro nisi? Nihil sequi error sed sunt voluptatibus quas ea incidunt ad
        provident, accusamus quaerat. Illo odit, laborum eveniet incidunt
        praesentium exercitationem doloremque ut. Odit, eos saepe. Quaerat nihil
        optio ducimus quos reprehenderit beatae repellendus, magni illo
        laboriosam veniam vero eligendi iure suscipit placeat saepe ipsa,
        asperiores blanditiis aspernatur, at repellat. Minus, odio consequatur,
        recusandae architecto voluptates fuga voluptatum nobis dolorem suscipit
        delectus eaque? Officiis soluta, unde nostrum facilis veritatis vel
        cumque dolor quis corrupti, expedita quasi architecto perferendis
        cupiditate deserunt quod minima, totam est obcaecati. Corporis iste
        eligendi voluptates. Sequi deserunt alias quas fugiat commodi suscipit
        neque! Rem, tempora cupiditate nisi iure est quos necessitatibus totam
        possimus! Aperiam assumenda non fugiat eos cumque quis reiciendis labore
        accusamus eum quibusdam, architecto qui saepe, illo, dolores nesciunt
        quaerat debitis reprehenderit nemo sed itaque asperiores ratione in
        provident! Accusamus at ea consectetur? Tempora, cum? Exercitationem
        aliquam, corrupti nobis voluptates quod necessitatibus? Sint totam
        voluptatum accusantium necessitatibus, repellendus repudiandae
        consequatur doloremque. Modi, laborum illum est nihil minima,
        consequatur suscipit, nisi accusantium tempora cumque similique. Error
        rem harum officiis dignissimos ad enim dicta vero ipsa fugit, minus
        doloremque non dolorum molestias ut rerum obcaecati aperiam commodi
        vitae, tenetur cumque temporibus esse! Quisquam eos assumenda, voluptas
        dolores, non aperiam culpa sint quasi recusandae odio sunt ratione
        veniam. Ad consequatur enim ipsa cupiditate quaerat debitis et culpa aut
        repudiandae quis officia quasi est at, assumenda, cumque quos. In
        recusandae doloremque iusto magni, expedita enim laboriosam optio eos
        nihil fuga reprehenderit quis. Enim quod corrupti architecto distinctio
        error incidunt molestias velit explicabo, numquam iusto assumenda
        repellendus est vel, totam eius ipsam, corporis ullam? Exercitationem?
      </p>
    </div>
  );
};

export default App;
