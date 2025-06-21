import Image from "next/image";

export default function Home() {
  return (
    <div style={{ paddingLeft: '600px', paddingRight: '600px'}}>
      <h1 style={{ fontSize: '60px'}}> Termos e condições: </h1>
      <p style={{overflowWrap: 'break-word', paddingBottom : '50px', overflowY : 'scroll', maxHeight : '800px'}}> 

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum nibh eu dolor fermentum maximus. Nulla rutrum lacinia sapien placerat lacinia. Mauris nibh quam, commodo eu congue id, euismod eget tellus. Pellentesque id ipsum nec urna semper ultricies. Maecenas libero neque, consectetur et egestas sed, tincidunt in ipsum. Donec quam risus, viverra nec odio ac, mollis mattis felis. Quisque hendrerit faucibus elit eu eleifend. Curabitur non fringilla ligula, non imperdiet elit. Curabitur dictum metus nec quam venenatis mattis.
        In vitae volutpat ligula, non feugiat urna. Curabitur porttitor vitae purus ac porta. Mauris ultricies at est eu euismod. Nullam semper vitae nunc ut gravida. Nulla quis mi ac est eleifend fringilla et tempor justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In vehicula mattis tellus. Proin consequat ipsum sit amet metus bibendum, vel rutrum augue placerat. In hac habitasse platea dictumst. Vivamus id diam malesuada, dignissim dui ut, tristique velit. Nam sit amet lorem dui. Pellentesque facilisis suscipit ipsum, in venenatis ante. In lacinia, sapien ut commodo euismod, massa magna consequat nibh, in molestie elit magna in velit. Nunc a urna bibendum, condimentum leo auctor, gravida quam.
        Cras facilisis, diam id euismod bibendum, ligula ex malesuada ipsum, non egestas lacus metus sed tortor. Sed ut nunc elementum velit aliquam iaculis. Suspendisse finibus, risus eget pellentesque varius, mi turpis scelerisque metus, et auctor nunc urna sed enim. Vestibulum accumsan sem quam, eget sollicitudin mi vehicula non. Suspendisse ac lacus velit. Curabitur cursus, nisl sed eleifend ornare, mauris turpis ultricies turpis, sit amet facilisis justo magna ac neque. Donec sed tortor nec risus sollicitudin consectetur. Maecenas a feugiat ligula, quis pretium odio.
        Proin dictum eget nisl et consequat. Aliquam ultrices lacus libero. Phasellus rutrum aliquet elementum. Pellentesque eros velit, mollis at ex in, ultrices fermentum nisl. Maecenas at ultricies est. Aenean vulputate mollis massa, quis tristique tellus aliquet nec. Nullam turpis est, aliquam sed eleifend ac, congue quis nisl.
        Proin eu gravida nibh, suscipit sagittis odio. In venenatis vestibulum feugiat. Nunc sit amet elit lorem. Vivamus tincidunt ligula id augue molestie dapibus. Pellentesque aliquet, tortor eget cursus tincidunt, ipsum elit gravida augue, id egestas sapien tortor ac augue. Suspendisse pretium vitae nisi sed tincidunt. Mauris a sollicitudin lectus. Duis erat metus, fringilla eget fermentum in, rhoncus vel leo. Nulla varius, neque sed feugiat luctus, eros elit pretium velit, et gravida orci diam at eros. Etiam suscipit, dui dignissim vestibulum fermentum, dui neque suscipit dui, ut mattis enim erat ac metus. Aenean quam lectus, lacinia ac interdum ac, tincidunt at elit. 
      </p>

      <Botao />
    
    
    </div>
  );
}


function Botao() {
  return (
    <button style = {{backgroundColor : 'darkgray', borderStyle : 'solid', borderWidth : '2px'}}>
      Declaro que li os termos e concordo.
    </button>
  );
}

