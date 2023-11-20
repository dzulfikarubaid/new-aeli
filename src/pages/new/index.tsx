import React, { useRef } from 'react'
import WithNavbar from './navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import Card from './card'
import Map from '@/components/Map'
const New = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "30%"])
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["20%", "0%"])
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const backgroundX2 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"])
  const textY2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY3 = useTransform(scrollYProgress, [0, 1], ["0%", "240%"])
  const backgroundX3 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const backgroundX4 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  return (

    <div className=' bg-dongker overflow-x-hidden '>

      <WithNavbar />
      <div ref={ref}  style={{ backgroundImage: 'url(/stars.png)',backgroundSize: 'contain', backgroundRepeat: 'repeat' }}  className='w-full flex flex-col items-center justify-center text-teks px-20 text-center h-full'>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, ease: "anticipate", bounce:"0.5" }, }}  style={{ y: textY2, }} className='pt-20 text-[80px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-purple-500 to-pink-300'>Experience is not necessarily Experiential</motion.h1>
        <motion.h1 className='text-subteks' style={{ y: textY3,  }}>Build Capacity, Upgrade Skills, and Enhance Creativity</motion.h1>
      </div>
      <div className='relative '>
        <motion.img className='w-full' style={{ y: backgroundY }} src="/mountainbg2.png" alt="" />
        <motion.img style={{ x: backgroundX, y: backgroundY }} className='absolute z-[1] -bottom-1 transform  -left-72 w-[1000px] ' src="/men23.png" alt="" />
  
        <motion.img style={{ y: backgroundY, x: backgroundX2 }} className='absolute -right-72 bottom-[-2px] w-[1000px]' src="/mountainpur.png" alt="" />


      </div>
      <div className=' p-20'>
        <h1  className='pt-20 text-4xl  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400'>Achievement is a reflection of dedication and hard work.</h1>
        <p className='text-center mb-10 mt-4 text-subteks '>AELI has notched up a series of impressive achievements, underscoring its commitment to excellence and constant progress.</p>
      <div className='flex flex-row w-full justify-around gap-6'>
    
      <Card judul="Pelatihan Berdaya Saing" deskripsi="AELI membuat program pelatihan bagi anggota baik perorangan maupun Lembaga"></Card>
      <Card judul="Tim Ahli Kementrian" deskripsi="AELI menjadi Tim Ahli Kementerian Pariwisata dalam merancang SKKNI Kepemanduan Outbound"></Card>
      <Card judul="Mitra BNSP dan LSP" deskripsi="AELI menjadi mitra BNSP dan LSP untuk melaksanakan sertifikasi Profesi Kepemanduan Outbound di Indonesia"></Card>

      </div>
     <div  className='flex flex-col bg-gradient-to-br mt-10 from-purple-950 to-transparent rounded-xl border-2 gap-4 border-white/30 text-teks p-6 '>
     <Map></Map>
     </div>
      <motion.p className='bg-dongker text-teks'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisl ipsum, posuere sed neque quis, luctus lobortis ante. Praesent tincidunt feugiat felis, a venenatis sapien euismod quis. Sed a leo in nisl pharetra aliquet et quis diam. Quisque rhoncus, lorem suscipit fringilla eleifend, elit dui egestas odio, eget pharetra ex orci vitae ante. Aliquam sed blandit risus, ut pellentesque ipsum. Aenean velit sapien, faucibus ac facilisis accumsan, commodo id velit. Curabitur convallis eros eros. Sed pellentesque sit amet ligula nec accumsan. Sed viverra nunc ac felis lacinia tempus. Curabitur quis blandit quam. Pellentesque suscipit nunc quis volutpat fringilla. Sed in arcu non justo faucibus fringilla. Etiam commodo lobortis tempus. Maecenas rutrum risus vel nisi finibus porttitor. Cras metus orci, volutpat in ornare id, scelerisque nec nunc. In hac habitasse platea dictumst.

        Vestibulum tincidunt turpis molestie, rutrum quam vel, lobortis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vitae ante id mi rutrum mollis. Mauris vel erat mi. Fusce bibendum interdum ipsum, faucibus tempor mauris ultrices in. Sed vulputate laoreet condimentum. Suspendisse lorem libero, tincidunt ac ligula eu, suscipit mollis neque. Integer rhoncus odio ac varius vehicula. Etiam volutpat vulputate lacinia. Mauris pretium pretium lorem, vitae accumsan lacus molestie vitae. Nam tempus, nisl nec egestas auctor, elit diam sagittis arcu, nec tincidunt orci lorem vel elit. Nullam vulputate vulputate ex, quis volutpat velit faucibus nec.

        Pellentesque dui erat, tincidunt et luctus sit amet, rutrum id purus. Curabitur congue, urna ultrices cursus condimentum, mauris nunc ullamcorper est, nec suscipit erat nunc non ex. Nulla vel elit nulla. Pellentesque elementum nisi lectus, in dapibus elit maximus sed. Donec blandit neque ac mi interdum, non sollicitudin ex luctus. Integer gravida enim eget diam tristique blandit. Nullam risus lorem, molestie eu sem eu, condimentum sodales urna. Aliquam erat volutpat. Donec ipsum turpis, finibus consequat convallis in, interdum quis erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Sed placerat iaculis arcu.

        Nulla convallis ex et enim commodo imperdiet. Nullam sit amet ipsum quis nisi porta gravida id a turpis. Vivamus feugiat interdum metus. Aenean vitae tortor id tortor ultricies bibendum. Proin varius fermentum turpis ut posuere. Fusce ac vulputate ante. Maecenas non lorem consequat est fringilla ornare. Sed vulputate tempus enim eleifend condimentum. Etiam eleifend dolor vel lacus suscipit, at faucibus ante tincidunt. Suspendisse sed tincidunt eros. Donec tempor tellus eu nisl suscipit consequat.

        Ut turpis odio, ullamcorper sit amet fermentum at, aliquam non tortor. Sed pretium condimentum tortor, id elementum velit pharetra quis. Aliquam sed lacus sit amet ante placerat dignissim. Aliquam blandit urna quis condimentum mollis. Integer libero nisi, lacinia suscipit magna id, laoreet consectetur enim. Mauris tristique pulvinar lacinia. Mauris feugiat erat eu pharetra ultricies. Aenean sit amet sem tempus, porta lectus sit amet, commodo magna. Integer dignissim justo at nisi ultrices ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla vehicula commodo lectus a faucibus. Aliquam at rutrum tellus. Donec semper, magna non lobortis egestas, ante justo pulvinar velit, sit amet pulvinar ligula felis non est.

        Mauris est ante, sodales sit amet hendrerit at, semper at risus. Phasellus neque ante, sagittis vel pharetra ac, dignissim non risus. Morbi ullamcorper leo eu erat aliquam finibus. Sed ac dictum mauris, eu mattis mauris. Maecenas et metus sagittis, ultrices ante sit amet, tincidunt est. Morbi id euismod arcu. Donec iaculis ultricies sapien eget pulvinar.

        Sed sem ipsum, feugiat a odio ac, bibendum consequat ipsum. Donec vitae tellus vitae neque tincidunt varius at vitae dolor. Donec eu blandit turpis. Fusce sapien turpis, varius quis placerat eget, tempus auctor ex. Donec id fermentum eros. Aliquam tincidunt aliquam justo eu ullamcorper. Pellentesque sit amet semper nisl. Duis in rhoncus mi, et pellentesque ipsum. Sed elementum, metus ut finibus aliquam, odio dolor aliquam elit, at rutrum odio dui id elit. Integer sem erat, gravida ut massa ut, porta dignissim ex. Proin vitae odio sodales, hendrerit leo dignissim, dapibus velit. Etiam vulputate leo lorem, nec gravida lectus pretium eu. Sed vel mi suscipit, venenatis libero pellentesque, molestie eros. Vivamus feugiat enim felis, varius lobortis nibh tempus at.

        Vestibulum non justo et felis blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi aliquet nec justo vel blandit. Cras imperdiet enim sed mi gravida, quis commodo mi consequat. Praesent dictum, risus non cursus aliquam, turpis magna malesuada tortor, ornare placerat metus massa ut mi. Donec ac convallis magna. Integer quis nisi scelerisque, feugiat lacus et, egestas ex. Ut bibendum, eros eget elementum lacinia, augue diam vehicula neque, feugiat blandit dui est at neque. Quisque hendrerit urna lacus, eu fermentum metus maximus et.

        Nunc pharetra eget quam sagittis volutpat. Quisque non justo ullamcorper, venenatis justo sed, faucibus metus. Nullam mollis nisl at lorem euismod finibus. Phasellus non leo in felis congue euismod. Curabitur viverra maximus purus in pharetra. Curabitur vehicula sit amet ligula vitae elementum. In vel tortor a purus ultrices malesuada id eu ex. Curabitur a lectus mi.

        Fusce semper mauris ac purus dapibus cursus. Quisque et libero ex. Suspendisse sit amet odio sem. Vivamus sed mauris eget orci sagittis viverra. Nunc convallis lorem ante, in efficitur magna gravida id. Nam nec efficitur dui. Donec varius hendrerit pellentesque. Etiam viverra lorem est, eget dictum sem imperdiet sit amet. Nulla sit amet molestie erat. Quisque tellus nibh, scelerisque id ante ac, fringilla auctor ligula. Ut vel sem euismod, feugiat purus sed, rhoncus ligula. Cras accumsan aliquet ante, eget dignissim magna porttitor quis. Vestibulum eu augue ultrices velit elementum blandit quis placerat est. Mauris nec malesuada tellus.

        Integer posuere leo non nisl volutpat dapibus. Fusce molestie tortor dui, pulvinar fermentum tellus dignissim id. Nam faucibus ligula tortor, ut eleifend metus suscipit vitae. Donec pulvinar, dui at laoreet vehicula, erat ex imperdiet odio, ac tincidunt odio libero in justo. Integer egestas augue convallis sapien lobortis tempor. Praesent diam erat, vulputate a ornare ac, commodo et nibh. Ut at efficitur nulla. Suspendisse venenatis dolor eget fringilla commodo. Praesent quis mi quis purus finibus hendrerit quis vel lacus. Aenean dictum sollicitudin enim eu scelerisque. Quisque viverra ante in sodales tempus. Maecenas ut tristique erat. Morbi neque nulla, aliquet auctor euismod vitae, gravida varius nulla. Donec laoreet a tellus sit amet interdum. Etiam non eros convallis, lacinia arcu a, semper tellus. Vivamus ac scelerisque urna.

        Nullam nunc ipsum, condimentum eget aliquet at, volutpat id quam. Nullam eget felis convallis, condimentum risus vitae, vestibulum diam. Proin maximus augue in nisi molestie viverra ac in diam. Donec tincidunt urna eu condimentum efficitur. Donec tempus fermentum lorem. Nulla facilisi. Duis convallis a tellus maximus iaculis. Mauris et lectus eros. Duis faucibus leo mi, id aliquet erat pretium vel. Curabitur porta fringilla erat, porttitor malesuada tellus auctor sit amet. Vestibulum ac urna vitae velit ultrices dictum. Integer metus leo, posuere vitae lobortis ac, semper tempus justo.

        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus cursus efficitur turpis eu consequat. Nunc quis venenatis enim, nec dapibus leo. Aenean euismod erat tortor, ut iaculis lacus volutpat porta. Aliquam suscipit enim sed magna eleifend, sed eleifend nulla mattis. Donec facilisis eget nisi ut ultrices. Suspendisse posuere efficitur condimentum. Aenean non facilisis erat.

        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse sem erat, dictum eget tristique nec, porttitor condimentum quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin tincidunt diam vel erat auctor, ac egestas erat convallis. Morbi tempor nulla lorem, ac varius ante porta sit amet. Phasellus tincidunt libero tincidunt felis ullamcorper interdum. Duis erat tortor, imperdiet in tortor scelerisque, faucibus imperdiet enim. Donec erat diam, molestie et suscipit vestibulum, placerat sit amet ante. Maecenas vitae nisi iaculis, aliquet ligula non, rhoncus felis. Morbi lacinia tellus ac lectus dignissim, id congue nunc tempor. Donec vel imperdiet dui.

        Vestibulum hendrerit dui scelerisque, porta sem non, rhoncus tortor. Quisque sit amet ligula eu nunc eleifend sollicitudin. Nullam ac enim semper sapien luctus euismod. Nullam at ipsum in massa bibendum malesuada. Suspendisse fermentum mi sed semper tincidunt. Vivamus ut tellus ut dui luctus ultrices sit amet et risus. Nulla ipsum lectus, condimentum eu feugiat ut, dignissim lobortis purus. Suspendisse ullamcorper nec enim at dapibus. Nulla nec libero a erat viverra feugiat. Phasellus id risus turpis. Quisque quis elementum lectus. Vivamus ultricies, dolor id tempor lacinia, justo erat efficitur dui, quis maximus tortor diam quis leo. Ut quis commodo orci.

        Duis tristique magna in molestie rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam facilisis erat nibh, in eleifend ante rutrum at. Nulla scelerisque suscipit magna, quis luctus arcu luctus non. In faucibus nibh ac justo facilisis tempus. Donec interdum fermentum arcu ut finibus. Proin libero nisi, suscipit eget consectetur quis, lobortis sit amet eros. Vestibulum tincidunt et urna et dictum. Nulla semper sollicitudin nisl quis molestie. Nulla pulvinar sed ante quis rutrum. Praesent in ornare sem, congue laoreet diam. Aliquam sed libero pulvinar, sagittis urna quis, ultrices tortor. Quisque justo erat, vehicula iaculis placerat a, placerat quis felis.

        In bibendum elementum sem at ultricies. Suspendisse dictum at felis sit amet rhoncus. Morbi quis gravida enim, nec finibus nibh. Integer tincidunt tortor non leo varius, non malesuada magna convallis. Fusce at varius nunc. Vestibulum et sodales mi. Duis interdum quam vel enim dictum porttitor. Curabitur eleifend auctor ipsum, nec placerat risus dictum a. Vestibulum a ornare enim. Suspendisse nec purus mauris. Aenean mattis viverra pharetra. Fusce quis ipsum nulla.

        Phasellus ullamcorper commodo tortor a pharetra. Etiam eget elit id massa eleifend rutrum. Fusce nec libero lorem. Praesent hendrerit, elit et congue pellentesque, erat nulla molestie urna, quis commodo leo ex ut urna. Etiam dictum vel magna at tincidunt. Sed ornare libero nec lorem imperdiet dignissim. Curabitur imperdiet ultrices risus vel hendrerit. Sed tempor ante viverra mauris dictum aliquet eget non turpis. Nullam luctus sem et ante rutrum lacinia. Quisque tincidunt felis id vulputate fringilla. Nunc mollis congue auctor.

        Sed bibendum lobortis dui, quis sagittis risus auctor eget. Curabitur sit amet elit nunc. Nam aliquam mauris et luctus aliquam. Maecenas at urna ut nibh porttitor tristique vitae eu lacus. Proin at dignissim ipsum, id vestibulum erat. Pellentesque erat sem, luctus eget tincidunt nec, pellentesque sit amet urna. Sed vestibulum vulputate velit, at vulputate arcu pulvinar id. Nulla suscipit metus eu est feugiat, sed cursus purus ultricies. Aliquam tincidunt auctor leo ac ullamcorper. Donec rutrum iaculis massa nec laoreet. Etiam id risus augue.

        Quisque vehicula aliquet mi, non rutrum mi lobortis vitae. In hac habitasse platea dictumst. Praesent massa lorem, porttitor lacinia urna sit amet, vehicula ullamcorper est. Etiam non lorem vel mi sodales euismod cursus at nulla. Nullam suscipit turpis id nulla aliquam ultrices. Maecenas lacinia tortor a laoreet gravida. Vestibulum egestas id tortor eu cursus. In cursus mi eu mauris feugiat consequat. Nunc consequat molestie mauris sit amet tempus. Nam ut enim vel turpis pretium fringilla. Proin sagittis eleifend commodo.

        Cras nec ultrices dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi a egestas quam, sit amet dapibus lorem. Donec dui orci, malesuada sed ante eu, egestas efficitur nisi. Etiam quis facilisis sapien. Maecenas lacinia erat eu dui vulputate euismod. Phasellus eget risus et justo eleifend vulputate ac sed est. Proin ornare tincidunt varius. In semper lacus ac neque ullamcorper, a luctus est pharetra. Etiam vel quam massa. Aliquam eros velit, faucibus in interdum eget, ultricies at lacus. Donec gravida semper eros, non maximus eros vehicula eget.

        Praesent pharetra vestibulum urna, vel mattis mauris vulputate et. Curabitur vel massa non dui iaculis rhoncus. Phasellus finibus tempus euismod. Phasellus a auctor eros, et aliquet nisl. Curabitur vel justo vulputate, imperdiet urna et, lacinia augue. Vestibulum nec ante eget dolor consequat ullamcorper. Mauris tincidunt sem eu leo vehicula vestibulum. Suspendisse non turpis lacus. Nullam in venenatis ante.

        Nulla imperdiet, enim non fermentum lacinia, eros lacus pulvinar sapien, id commodo ipsum leo non justo. Praesent in blandit tortor. Nullam ipsum magna, blandit sed posuere eu, mattis at velit. Vestibulum tristique lorem ac ultricies condimentum. Integer venenatis a turpis at pharetra. Morbi aliquam sollicitudin pretium. Vivamus lacinia rhoncus arcu ut convallis. In quis magna sit amet velit commodo egestas ac id sapien. Aenean tincidunt enim cursus efficitur viverra. Maecenas nec diam semper, tincidunt quam a, elementum ex. Sed porttitor est a mauris interdum tempus. Etiam in imperdiet nisi, at egestas felis.

        Vestibulum laoreet ante at ex faucibus vulputate. Vestibulum consequat pretium eleifend. Sed et volutpat nisl. Quisque auctor justo sit amet felis feugiat, et posuere sapien condimentum. Ut sit amet tellus tristique, sollicitudin justo nec, rutrum velit. Fusce malesuada pellentesque congue. Quisque ut rhoncus est. Cras tempor magna eget tellus rutrum, sed dignissim felis hendrerit. Ut posuere a leo in porttitor.

        Quisque hendrerit eros eget odio luctus, eu tempus ligula tristique. Aenean vehicula arcu sed arcu sollicitudin, at sagittis sem bibendum. Suspendisse ut tristique ante. Morbi sodales congue augue, sed fringilla massa tincidunt id. Donec id odio condimentum, egestas quam vitae, porta diam. Nulla dignissim sem enim, at laoreet orci porta et. Vestibulum cursus fringilla odio eget commodo. Nam eget elit sagittis, faucibus dolor posuere, vehicula erat. Pellentesque vehicula sapien et magna tempus, sit amet aliquet turpis pulvinar. Fusce condimentum semper ligula, sed interdum turpis scelerisque vel. Donec sodales fringilla turpis, at scelerisque lorem molestie ac. Donec tincidunt, nisl nec interdum mattis, nisl ex mollis ligula, vitae aliquam nulla neque ultricies odio. Quisque imperdiet luctus accumsan. Quisque at accumsan arcu, id tincidunt ligula.

        Fusce sit amet auctor tortor. Ut eleifend diam ut nunc fringilla pellentesque. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non purus gravida, laoreet metus ac, lacinia risus. Ut feugiat sed mi congue convallis. Nam pretium tortor justo, ut ultricies elit tincidunt at. Duis metus elit, sagittis id euismod at, finibus eget enim. Nulla fringilla, tellus quis tempor volutpat, libero urna hendrerit est, sed bibendum justo leo quis diam. Sed placerat massa sed tempus ornare. Etiam ipsum magna, lacinia ac mi ut, facilisis sagittis nisi. Nunc lorem eros, lobortis id justo tempor, mattis feugiat quam. Duis ac orci tincidunt, interdum sapien non, egestas erat.

        Cras blandit nisl vitae ex sollicitudin auctor. Donec arcu arcu, viverra quis lectus id, facilisis eleifend dui. Sed ac tellus purus. Curabitur purus nibh, pulvinar id ex quis, eleifend mollis nisl. Pellentesque tristique tempor augue. Vestibulum commodo placerat arcu ac pulvinar. Praesent id tellus in odio varius rhoncus. Mauris ultrices dolor nisl, eu laoreet est congue pretium.

        Nullam ac elit a elit pellentesque euismod. Sed pretium mollis aliquet. Vivamus euismod, neque at semper iaculis, nibh erat venenatis justo, eget feugiat metus est a sapien. Ut in nunc et lectus dictum convallis eget eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet et elit nec fermentum. Nam at lectus ut nunc accumsan rhoncus. Fusce tristique porttitor eros a feugiat. Integer malesuada et magna quis convallis. Duis blandit suscipit dui, a mattis nibh interdum in. Morbi tristique consectetur ipsum, et vehicula nisl vestibulum sed. Ut aliquam faucibus magna. Nam cursus lobortis quam, ac interdum libero hendrerit sed. Vestibulum eget ante ut tortor rhoncus varius. Suspendisse vitae ipsum id libero mattis rutrum ut eget lorem.

        In blandit lectus a cursus rhoncus. In molestie, risus ut aliquam pellentesque, dui ante malesuada sem, id volutpat purus urna ac mauris. In ornare erat dui, eu pharetra sem tempus quis. Nam eleifend sem faucibus, pharetra velit convallis, ultricies massa. Integer sed leo risus. Ut gravida pulvinar est, ac finibus felis. In aliquet nibh nisl. Duis in nulla tincidunt, hendrerit arcu in, vehicula ipsum. Praesent sed ex convallis, tincidunt risus scelerisque, laoreet risus. Cras risus nisi, pharetra id nisi a, rhoncus tristique dolor. Morbi vitae maximus ligula. Suspendisse sed risus ex. Cras quis tincidunt erat, eu efficitur lorem. Duis id diam id ligula aliquam feugiat eget at urna. Etiam quis odio a elit condimentum laoreet.

        Donec nec convallis odio. Aliquam turpis sem, consectetur a lectus id, gravida finibus leo. Mauris ac commodo felis. Donec quis aliquam arcu. Etiam a quam quis elit placerat mollis at et nisl. In ac rutrum est. Vestibulum tincidunt nec elit nec dictum. In in urna arcu. Vestibulum molestie, mi pulvinar pretium porttitor, tortor ipsum scelerisque lectus, vel tincidunt nulla ante non urna. Morbi non efficitur leo, quis eleifend nisi. Curabitur vehicula dolor ut turpis molestie lobortis. Quisque fermentum eros nec nisi ornare, in fermentum justo lobortis. Nam at justo pulvinar, tempus ipsum et, rutrum quam. Praesent vel convallis ante. Nam et dolor nisi. Vivamus at sodales velit.

        Praesent nec libero nec elit facilisis elementum porta a est. Donec ultricies eros diam. Phasellus tempus mauris est, ac feugiat lacus elementum at. Quisque dictum maximus felis sed tincidunt. Morbi tincidunt, mi eget suscipit aliquam, neque nunc molestie tellus, non dapibus quam nisi vel dui. Phasellus eget lacus sit amet eros facilisis tempor vitae quis ligula. Mauris bibendum lorem nec leo bibendum, non hendrerit massa iaculis. Phasellus quis vestibulum lorem. Integer vitae lacus ac mauris facilisis tempus. Etiam et dignissim erat, sit amet volutpat neque. Nam aliquam, nisl ut finibus pharetra, tellus massa tempor nisl, sagittis finibus nisi neque eget nunc. Sed eget lorem nulla.

        Duis imperdiet quam bibendum, cursus velit eleifend, mollis eros. Proin mollis leo et lectus convallis rutrum. Quisque viverra lorem quis nunc vulputate vehicula. Sed ornare tortor at quam ultrices euismod. Suspendisse efficitur dolor ex, ut gravida felis efficitur at. Donec quis semper nunc. Pellentesque vel mauris nec erat feugiat sollicitudin sit amet finibus metus. Praesent molestie sem nisi, id gravida orci vehicula a. Integer metus lacus, cursus vitae scelerisque sit amet, lacinia elementum lectus.

        Nunc vel volutpat nibh, vel consequat dui. Pellentesque faucibus a risus sit amet porta. Sed elit enim, sollicitudin a faucibus ac, pharetra et velit. Sed sit amet turpis vel arcu hendrerit efficitur at eu orci. Sed suscipit varius dui, nec pellentesque velit venenatis quis. Mauris quis sapien ac diam mollis euismod sit amet sed justo. Vivamus sit amet turpis mattis, facilisis enim sed, consequat leo. Ut libero lorem, vestibulum non urna sit amet, consequat ornare purus.

        Nullam consectetur odio nec sollicitudin dapibus. Duis congue scelerisque lacus, a tincidunt orci tempus sit amet. Integer quam tellus, suscipit sed scelerisque id, auctor quis nisl. Proin pellentesque felis nec velit egestas, ut porta est accumsan. Proin vulputate nec magna faucibus faucibus. Aliquam congue aliquam nulla. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec a turpis a quam laoreet tincidunt.

        Quisque ullamcorper ut sapien ac cursus. Donec id aliquet urna. Duis ut malesuada eros, sollicitudin bibendum est. Donec dignissim, tellus nec tincidunt blandit, justo odio porta odio, at finibus massa tortor in diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit facilisis viverra. In aliquam arcu nec enim tincidunt, quis venenatis elit sodales. Etiam quis laoreet tortor. Nulla convallis finibus diam, eget mattis quam finibus sed. Nulla vitae iaculis nunc. Suspendisse posuere est diam, sed fringilla tellus vestibulum ac. Phasellus eu tincidunt metus. Sed eget ante magna. Cras fringilla facilisis accumsan. In imperdiet justo metus, nec varius tellus sodales vel. Donec euismod vel mauris a interdum.

        Suspendisse sit amet purus non ante dictum tincidunt. Aliquam auctor nisl vitae mattis congue. Vivamus accumsan ut neque a aliquam. Etiam ac mi ullamcorper, pharetra risus sit amet, tincidunt dui. Suspendisse eu mi a dui auctor blandit non sed neque. Nam mattis turpis eget finibus ornare. In vel erat erat. Phasellus non turpis quis orci lacinia pretium. Etiam congue pharetra ante ac ornare. Quisque vulputate nunc nibh, quis mattis nunc gravida vitae. Curabitur ipsum ante, feugiat ac convallis vitae, aliquam placerat augue. Etiam euismod, tellus et egestas efficitur, nunc quam convallis ipsum, a ultrices nisi ipsum non neque. Etiam sed porttitor justo, consectetur vehicula quam. Maecenas faucibus faucibus nisi.

        Nulla convallis ligula tincidunt, condimentum enim vel, tempor tellus. Suspendisse tristique venenatis mauris et molestie. Pellentesque sed sapien facilisis, scelerisque erat vel, congue sem. Sed vitae est nunc. Ut pharetra, tortor ut pretium euismod, neque ipsum varius metus, vel malesuada tortor ante sit amet lacus. Ut at vulputate risus, nec faucibus lectus. Donec ultrices eu quam ut luctus. In sed ante egestas magna commodo tempus vel sed risus. Pellentesque sollicitudin quam consequat purus consequat ultricies. Ut eget vestibulum massa. Etiam lacinia ullamcorper purus ac iaculis. In laoreet augue eu cursus condimentum.

        Nullam non odio sed quam ullamcorper facilisis a in ex. Curabitur varius odio vitae molestie laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in maximus lectus. Curabitur eget interdum arcu. Nam imperdiet, neque eget commodo imperdiet, dui odio lobortis metus, a interdum mauris magna non lacus. Aenean elementum, magna at accumsan molestie, enim purus semper metus, quis venenatis turpis tellus eu nulla. Phasellus est lacus, luctus scelerisque scelerisque eget, tincidunt non justo. Aenean varius purus non est condimentum vestibulum. Proin varius consequat ipsum ut molestie. Cras ac lacus faucibus, congue sapien ut, volutpat erat. Morbi id aliquam lectus. Suspendisse potenti. Morbi mauris enim, rhoncus vestibulum blandit id, placerat id augue.

        Proin sit amet cursus metus, eu hendrerit neque. Sed consectetur leo at porttitor finibus. Integer massa urna, tincidunt id auctor vitae, sagittis eget est. Nam euismod pharetra scelerisque. Nam commodo, elit in eleifend interdum, orci justo finibus ligula, eget fermentum justo metus eu orci. Maecenas tempor nisl vitae magna lacinia, sit amet interdum arcu convallis. Sed vel risus ac lacus mollis viverra et eget dolor.

        Aenean auctor metus libero, sed imperdiet magna aliquet vel. Aliquam vel erat a nibh dapibus cursus. Praesent nec commodo massa. Nulla imperdiet vestibulum placerat. Donec sit amet gravida felis. Curabitur ipsum nunc, ultricies tincidunt consequat vitae, lobortis eu odio. Sed iaculis leo feugiat tristique euismod. Duis faucibus congue dapibus. Donec venenatis nec lectus at euismod. Donec lacus mi, ultricies non felis at, laoreet elementum leo. Donec id leo eros. Aliquam sed mauris non elit venenatis efficitur quis ac ligula. Nam sit amet mauris vehicula, pretium neque id, suscipit quam. Curabitur bibendum quis orci et consectetur. Etiam malesuada, risus sed varius venenatis, tellus tellus pharetra lacus, finibus blandit ex diam non enim.

        Cras lobortis ex sem. Proin et ex pulvinar justo suscipit ultricies nec sit amet velit. Maecenas ultricies aliquet augue, at luctus est blandit vitae. Cras mollis auctor ornare. Etiam a metus ligula. Nunc cursus dui quis convallis auctor. Suspendisse dapibus vitae nunc eget interdum. Pellentesque ut scelerisque mauris. Praesent ut commodo lectus. Maecenas cursus odio eu scelerisque semper. Integer sed lacinia diam, eu vehicula purus. In ut interdum velit. Morbi at augue tortor. Maecenas tempus convallis lacus, at tristique dolor.

        Nulla dignissim pulvinar sapien, at tempus leo convallis et. Duis pulvinar auctor elementum. Aenean sit amet elementum mi. Etiam congue dui a viverra convallis. Integer commodo justo sem, sit amet porta ex malesuada eget. Morbi vulputate in lectus sit amet efficitur. Pellentesque risus ex, egestas id justo ac, molestie posuere felis. Nullam turpis turpis, porttitor ut aliquet nec, imperdiet quis augue. Sed vitae nulla non enim fermentum suscipit vitae interdum quam. Nulla laoreet magna metus, congue dignissim velit viverra quis. Ut sed elementum ex, eu elementum lorem.

        Fusce orci turpis, imperdiet suscipit pellentesque eget, varius vitae velit. Cras at lobortis nisl. Suspendisse a lobortis elit, nec efficitur metus. Proin id metus a tortor fringilla vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vel maximus tortor. Cras consectetur turpis non elementum eleifend. Donec odio libero, tempus eu justo nec, tincidunt vehicula nunc. Duis maximus dui a quam lobortis, ac luctus metus sollicitudin. Duis ornare purus vitae lorem dapibus pellentesque. Proin mattis leo id turpis viverra fringilla. Suspendisse sit amet tortor vel arcu varius dictum sit amet vel metus. Mauris ultricies turpis vel quam gravida semper. Nam in enim in metus vestibulum efficitur a eget diam. Curabitur non lectus tempus, interdum ante a, laoreet lectus.</motion.p>

      </div>
      
      
    </div>
  )
}

export default New