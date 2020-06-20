using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WorldCities.Data.Models
{
    public class City
    {
        #region Constructor
        public City()
        {

        }
        #endregion

        #region Properties
        [Key]
        [Required]
        public int Id { get; set; }

        public string Name { get; set; }
        public string Name_ASCII { get; set; }
        public decimal Lat { get; set; }
        public decimal Lon { get; set; }
        #endregion
        [ForeignKey("Country")]
        public int CountryId { get; set; }

        #region Navigation Properties
        public virtual Country Country { get; set; }
        #endregion
    }
}
