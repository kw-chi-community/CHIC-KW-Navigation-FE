type PlaceCardProps = {
  image: string;
  name: string;
  location: string;
};

export default function PlaceCard({ image, name, location }: PlaceCardProps) {
  return (
    <div className="flex items-center p-4 bg-white shadow-sm rounded-lg mb-4 border border-gray-200">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-lg object-cover mr-4"
      />
      <div className="flex flex-col">
        <h2 className="text-sm font-bold text-gray-900">{name}</h2>
        <p className="text-xs text-gray-600">{location}</p>
      </div>
    </div>
  );
}