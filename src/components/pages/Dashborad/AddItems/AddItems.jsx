import SectionTittle from "../../../shared/SectionTittle/SectionTittle";
import { useForm } from "react-hook-form";
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div>
        <SectionTittle
          subHeading={"add an item"}
          heading={"what is new "}
        ></SectionTittle>
        {/* form */}
        <div className="bg-base-200 rounded-md p-4 space-y-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full ">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Recipe name*</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </div>
            </div>
            <div className="flex justify-between gap-1 w-full ">
              {/* category */}
              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text">Recipe name*</span>
                </label>
                <select
                  {...register("category")}
                  className="select select-bordered w-full "
                >
                  <option disabled selected>
                    Select a category
                  </option>
                  <option value={"salad"}>Salad</option>
                  <option value={"pizza"}>pizza</option>
                  <option value={"soup"}>soup</option>
                  <option value={"drinks"}>drinks</option>
                </select>
              </div>

              {/* price */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Recipe name*</span>
                </label>
                <input
                  type="text"
                  {...register("price")}
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {/* textarea */}
            <div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Recipe Details*</span>
                </label>
                <textarea
                  placeholder="Recipe details"
                  {...register("recipe")}
                  className="textarea textarea-bordered textarea-lg w-full "
                ></textarea>
              </div>
            </div>
            {/* file chose */}
            <div className="w-full my-2">
              <div className="form-control w-full">
                <input
                  type="file"
                  {...register('image')}
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div>
              <input
                className="btn btn-outline  my-2"
                type="submit"
                value={"Add Item "}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
