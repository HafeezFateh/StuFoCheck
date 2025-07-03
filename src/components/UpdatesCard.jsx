
function UpdatesCard({ title, content, postedAt }) {
  return (
    <div className="flex flex-col gap-2 border border-slate-300 bg-slate-100/30 p-4 rounded-lg shadow-sm">
      <h1 className="text-lg text-white font-semibold">{title}</h1>
      <p className="text-sm text-slate-200 font-light">{content}</p>

      {postedAt && (
        <p className="text-xs text-right text-slate-100 italic">
          {new Date(postedAt).toLocaleString()}
        </p>
      )}
    </div>
  );
}

export default UpdatesCard;

