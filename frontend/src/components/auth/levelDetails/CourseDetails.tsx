import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import course from "../../../provider/CourseProvider";
export default function CourseDetails() {
  const { id } = useParams();
  const [c, setC] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await course.getCourseById(id);
        setC(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching course: ", error);
      }
    };

    fetchData();
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <h1 className="text-3xl text-white text-center mb-10 mt-4 font-bold">
        Cours niveau 1 sur {id}
      </h1>
      <div className="flex flex-col justify-center items-center w-2/3">
        <h1 className="text-3xl text-white font-bold">Description</h1>

        <p className="text-white mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          excepturi autem aliquam deleniti dolorem. Temporibus atque esse, sed
          hic dolores delectus pariatur, adipisci, voluptas quo accusantium
          tenetur itaque autem qui!
        </p>
        <h1 className="text-3xl text-white font-bold mt-8">Contenu</h1>
        <p className="text-white mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quisquam
          laudantium voluptates dolores incidunt repellat hic, illum reiciendis
          optio, eligendi placeat eius facere quasi et aliquam maiores totam
          similique necessitatibus tenetur blanditiis in corrupti asperiores
          fugiat. Veritatis magnam debitis accusamus, iusto eius saepe deleniti
          aspernatur quidem, ad mollitia cumque distinctio omnis fuga! Rerum
          pariatur velit sit nostrum quo quam sapiente quas non, natus
          laboriosam neque delectus aperiam, dolor officiis ab eligendi
          consectetur quod. Ratione vel harum beatae vero, itaque, accusantium
          inventore quisquam officia magnam quis laudantium, laborum nam non?
          Consectetur omnis commodi aliquam iusto optio dolorum deserunt
          repudiandae veritatis fugiat architecto! Placeat distinctio ipsa,
          maxime sunt reprehenderit vitae in repellendus ea eum sequi et non
          iste recusandae corrupti dolor, itaque porro harum cumque tenetur
          optio, officiis error fuga dignissimos neque! Dolor iste earum
          commodi, cupiditate veritatis recusandae, beatae optio itaque modi
          architecto aliquam suscipit! Unde, accusamus eum dolorum assumenda,
          magni et ipsam error quos laboriosam numquam iure? Eveniet quos, omnis
          consequuntur voluptates corporis veniam aliquid! Quis quos doloribus
          quae? Harum obcaecati dolor voluptas totam, ipsam officia deleniti,
          voluptatibus amet doloribus eos dolorem nobis minima quas porro
          placeat? Rerum deleniti facilis, sunt autem cupiditate assumenda
          provident possimus. Ut odit totam atque? Assumenda cupiditate nemo
          provident, ipsam perspiciatis dolorum non, sit cum quos quis
          consectetur molestias, officiis pariatur eius dolores. Officia ducimus
          ipsam doloremque aut corporis, dolore porro libero. Ullam pariatur
          adipisci cum nulla quos ipsa dolorem porro facilis, id harum cumque
          nihil optio praesentium inventore non eos quam est possimus quia
          asperiores ab eaque? Nemo harum sunt asperiores nostrum, quod sit amet
          in libero, incidunt iusto id. Delectus facilis eveniet dolorem
          suscipit, voluptas assumenda fugiat sed debitis quasi omnis! Dolores
          dolorum autem impedit quam saepe optio unde provident corporis commodi
          eveniet non fugit sapiente quasi ad harum, odit placeat totam
          accusamus laudantium iusto nostrum quaerat. Deleniti ducimus labore
          hic corporis in voluptatum, praesentium exercitationem odit molestias
          repudiandae ad iste tenetur impedit? Sunt, numquam earum officia quas
          beatae, reprehenderit laudantium, accusamus sapiente commodi ipsam ex?
          Pariatur at reiciendis placeat iste enim recusandae dicta nobis ab
          facilis? Vero recusandae dolor cupiditate commodi provident
          necessitatibus ipsa ab blanditiis. Veniam numquam aperiam aliquam ad.
          Repellat reprehenderit amet, numquam ipsam, cumque iusto sequi
          explicabo adipisci assumenda, dolorem eligendi tenetur! Consequatur,
          laudantium quisquam. Ut dicta natus voluptas! Minus earum possimus ab
          vero provident dolorem? Voluptates a dignissimos ipsum accusamus,
          commodi voluptate quibusdam, quasi aperiam praesentium eos minus
          molestias tenetur ut reiciendis eius illum magni. Aliquid, qui
          architecto id illo assumenda accusamus molestias totam ipsa
          praesentium sequi hic vero ab illum exercitationem nobis ut
          accusantium amet? Voluptates, quisquam quos laudantium dolores, quas
          quasi placeat nemo dolor, recusandae non hic esse modi? Sint culpa id
          dignissimos sit eaque tempore, velit ipsum neque similique. Suscipit
          doloribus corporis quasi voluptates ullam sequi dolores ipsum velit
          qui error! Quos, possimus accusantium? Rerum saepe fuga accusamus
          similique libero, laboriosam consequatur quia, voluptatem odio illum
          iusto ipsa odit temporibus, error quaerat! Fugiat vitae molestias
          obcaecati, repellat est voluptatum, perferendis accusantium distinctio
          enim perspiciatis quis odio quod delectus ipsa recusandae tempore
          provident eaque sed at quisquam. Quisquam, ut. Commodi esse maxime
          perferendis corporis ratione voluptatum facere, ex optio facilis
          dolorem? Quidem quod quas ipsum sunt enim nihil provident unde rerum,
          a minima non dolorum labore eaque dolores amet reprehenderit corrupti,
          explicabo placeat officia illum expedita aut nam voluptas sint?
          Aperiam eaque minus illum veniam recusandae officiis reprehenderit
          laudantium quas, neque sequi quidem dolorem possimus esse aliquam
          commodi modi non saepe. Dignissimos quisquam recusandae ad adipisci
          delectus, animi illo, non unde pariatur soluta eum fugit sapiente
          beatae voluptas eius cum earum a reprehenderit ab neque voluptatum
          possimus? Harum illum, nihil ad neque explicabo minima ratione
          voluptates aliquam voluptate. Accusantium aperiam vitae id alias
          quasi, corrupti perspiciatis in sint quaerat, odit architecto adipisci
          similique! Qui error sit assumenda doloremque ad facilis dolores
          incidunt adipisci quisquam fugit? Sit soluta aliquid provident ipsa
          doloribus ex? Assumenda beatae dignissimos facere, mollitia corporis
          molestiae ducimus quae omnis est enim numquam asperiores fugit quos!
          Laudantium, doloribus? Tempore ipsam tempora nemo sit, dicta natus
          ducimus expedita sequi nam doloremque officiis ut accusamus porro
          optio eaque quo molestiae nulla maiores consectetur iste corporis
          molestias quaerat. Mollitia odit doloremque soluta veritatis dolor
          quis numquam, necessitatibus quasi tempore, quos eum aliquid ipsam
          dignissimos ut amet cumque consectetur molestiae! Eum id incidunt
          aliquam consequatur laudantium quos illum autem corporis quis, vitae
          eveniet voluptas culpa necessitatibus quam aut deserunt repellendus ut
          eos vel at libero dolores amet. Reprehenderit vel libero optio dolor
          rem, quisquam, aperiam quo iure quidem sequi, dolorum velit obcaecati
          consequatur nobis repellat corporis quod minus voluptate repellendus.
          Fugit, modi necessitatibus vero natus magnam provident et doloribus
          placeat possimus odit quasi quos omnis. Vero saepe molestiae eum odit
          inventore. Distinctio rem velit unde vero quae inventore at sequi
          repudiandae ratione esse sunt reprehenderit a excepturi fugiat,
          assumenda hic ipsum. Dignissimos ad obcaecati iusto voluptates, veniam
          suscipit numquam aspernatur velit consectetur molestias, accusantium
          commodi dolorem odit maiores perferendis laboriosam amet doloremque
          odio quis, id modi qui nostrum porro. Odio culpa sit provident omnis
          tempora ad debitis perspiciatis. Non iusto exercitationem nihil fuga
          commodi officiis optio reprehenderit voluptas! Voluptatibus dicta
          libero esse quo. Veritatis tenetur itaque doloribus. Possimus eveniet
          dolor eaque assumenda rem blanditiis ullam perspiciatis exercitationem
          animi, excepturi repudiandae tempore veritatis fugiat hic deserunt
          voluptas iste explicabo, odit non eum omnis. Dolor obcaecati
          consequuntur sed rem, ullam laboriosam asperiores harum officia nihil
          voluptate, sint assumenda quis at repellat modi accusamus, sapiente
          illum minus explicabo corrupti eius velit? Ipsa suscipit error
          quibusdam nam quia at ad enim laudantium aspernatur quae ea sed
          consequatur totam debitis minima nisi neque cupiditate fugit pariatur
          consequuntur iste, dicta quisquam earum. Non veritatis quod cumque.
          Optio, tenetur cum? Fugiat, laudantium. Consequatur, ut laudantium
          illo laborum in natus. Fugit ea minus mollitia inventore beatae!
          Distinctio nesciunt, ut doloremque quia, harum fugit eligendi
          perferendis minima beatae ipsum possimus perspiciatis accusantium
          consequatur nisi sunt eaque modi quasi consectetur, rerum ipsa numquam
          suscipit reiciendis laborum. Nobis unde fugit at laudantium maiores
          totam nisi blanditiis explicabo nam. Accusantium?
        </p>
      </div>
      <div>
        <p>vidéo</p>
        <button className="bg-[#DB570D] h-10 w-48 text-white font-semibold hover:bg-white hover:text-[#DB570D]">
          Voir le pdf
        </button>
      </div>
    </div>
  );
}
