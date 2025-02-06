import DirectionHeader from '@/components/layout/Header/DirectionHeader'
import RouteCard from '@/features/components/Route/RouteCard'

function DirectionPage() {
  return (
    <div className="container h-[1000px] bg-white text-black">
        <DirectionHeader />
        길안내 페이지 !!
        
        <div className="fixed px-2 bottom-[5vh] left-0 right-0 flex justify-center z-50">
          <RouteCard type="fast" duration="15분" distance="956 m" description="시간이 촉박할 때 추천 ⭐" />
          <RouteCard type="normal" duration="20분" distance="1km" description="재학생이 자주 사용 길" />
          <RouteCard type="comfortable" duration="30분" distance="1.5km" description="계단이 없는 길" />
        </div>
    </div>
  )
}

export default DirectionPage